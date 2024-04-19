import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./mousetracker.module.css";

interface MouseTrackerProps {
  children: React.ReactNode;
  offset?: { x: number; y: number };
}

interface DocumentEventProps {
  events: string;
  callback: (e: Event) => void;
}

const useDocumentEvent = ({ events, callback }: DocumentEventProps) => {
  const ref = useRef(callback);
  ref.current = callback; // Always point to the most recent callback
  useEffect(() => {
    const eventsArray = events.split(" ");
    const handler = (e: Event) => ref.current(e);
    eventsArray.forEach((event) => document.addEventListener(event, handler));
    return () => eventsArray.forEach((event) => document.removeEventListener(event, handler));
  }, [events, ref]);
};

export const MouseTracker = ({ children, offset = { x: 0, y: 0 } }: MouseTrackerProps) => {
  const element = useRef({}) as React.MutableRefObject<HTMLDivElement>;
  useDocumentEvent({
    events: "mousemove",
    callback: (e) => {
      if (element.current) {
        const { clientX, clientY } = e as MouseEvent;
        const { x, y } = offset;
        element.current.style.transform = `translate(${clientX + x}px, ${clientY + y}px)`;
        element.current.classList.add(style.active);
      }
    },
  });

  return createPortal(
    <div className={`${style.cursor}`} ref={element}>
      {children}
    </div>,
    document.body
  );
};
