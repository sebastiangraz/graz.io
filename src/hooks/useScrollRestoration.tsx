import { useEffect } from "react";

const SCROLL_KEY = "last_scroll_pos";

export const useScrollRestoration = () => {
  // Function to scroll to element with ID matching the hash
  const scrollToHashElement = (hash: string) => {
    // Remove the leading # character
    const id = hash.replace(/^#/, "");

    if (!id) return false;

    console.log(`Attempting to scroll to #${id} element`);

    // More aggressive approach with multiple retries
    const attemptScroll = (retryCount = 0, maxRetries = 10) => {
      const element = document.getElementById(id) || document.querySelector(`[id="${id}"]`);

      if (element) {
        console.log(`Found #${id} element, scrolling to it`);

        try {
          // Get the element's position
          const rect = element.getBoundingClientRect();
          const targetPosition = rect.top + window.scrollY - 20; // 20px offset for better visibility

          // Scroll to the element
          window.scrollTo({
            top: targetPosition,
          });

          return true;
        } catch (err) {
          console.error(`Error scrolling to #${id}:`, err);
        }
      } else if (retryCount < maxRetries) {
        // Element not found yet, retry with exponential backoff
        const delay = Math.min(100 * Math.pow(1.5, retryCount), 3000);
        console.log(`#${id} not found, will retry in ${delay}ms (attempt ${retryCount + 1}/${maxRetries})`);

        setTimeout(() => {
          attemptScroll(retryCount + 1, maxRetries);
        }, delay);
        return false;
      } else {
        console.warn(`Failed to find element with id "${id}" after ${maxRetries} attempts`);
        return false;
      }
    };

    return attemptScroll();
  };

  // Save scroll position before unload
  useEffect(() => {
    // Force browser's native scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }

    // Save scroll position on various events
    const saveScrollPosition = () => {
      const scrollY = window.scrollY.toString();
      document.documentElement.style.setProperty("--last-scroll-y", scrollY);
      localStorage.setItem(SCROLL_KEY, scrollY);
    };

    // Save scroll position before page unloads
    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Handle fragment identifiers (hashtags) in the URL
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        console.log(`Hash changed to: ${window.location.hash}`);
        // Delay slightly to ensure DOM is updated
        setTimeout(() => {
          scrollToHashElement(window.location.hash);
        }, 50);
      }
    };

    // Also listen for router navigation events
    const handleDOMContentLoaded = () => {
      if (window.location.hash) {
        console.log(`Initial hash detected: ${window.location.hash}`);
        // Start with a short delay
        setTimeout(() => {
          scrollToHashElement(window.location.hash);
        }, 50);

        // Also try after all images and resources are loaded
        window.addEventListener(
          "load",
          () => {
            scrollToHashElement(window.location.hash);
          },
          { once: true },
        );
      }
    };

    // Handle hash on initial load
    handleDOMContentLoaded();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Also listen for DOM updates that might introduce the element
    const observer = new MutationObserver(() => {
      if (window.location.hash) {
        scrollToHashElement(window.location.hash);
      }
    });

    // Start observing the document with configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      observer.disconnect();
    };
  }, []);

  // Restore scroll position on component mount
  useEffect(() => {
    // Check if this is a page reload
    const perfEntries = performance.getEntriesByType("navigation");
    const isReload = perfEntries.length > 0 && (perfEntries[0] as PerformanceNavigationTiming).type === "reload";
    const hasHash = window.location.hash !== "";

    // If there's a hash, prioritize scrolling to that element
    if (hasHash) {
      console.log(`Detected hash on load: ${window.location.hash}`);

      // Try scrolling immediately
      scrollToHashElement(window.location.hash);

      // Also try after window load event
      window.addEventListener(
        "load",
        () => {
          scrollToHashElement(window.location.hash);
        },
        { once: true },
      );

      return;
    }

    // Otherwise handle normal scroll restoration for page reloads
    if (isReload) {
      const savedPosition = localStorage.getItem(SCROLL_KEY);

      if (savedPosition) {
        // Use multiple attempts to restore position
        const scrollToSavedPosition = () => {
          setTimeout(() => {
            window.scrollTo(0, Number(savedPosition));

            // Try again after a longer delay (for complex DOM layouts)
            setTimeout(() => {
              window.scrollTo(0, Number(savedPosition));
            }, 500);
          }, 100);
        };

        // Try immediately after mounting
        scrollToSavedPosition();

        // Also try after window load event
        window.addEventListener("load", scrollToSavedPosition, { once: true });
      }
    }
  }, []);
};
