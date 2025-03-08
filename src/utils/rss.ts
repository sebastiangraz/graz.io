import { Feed } from "feed";
import { entryMeta } from "@/routes/articles";

export const generateRssFeed = () => {
  const siteURL = "https://graz.io";
  const date = new Date();

  const feed = new Feed({
    title: "Sebastian Graz's Blog",
    description: "Independent design consultancy focused on branding, digital design and beautiful implementation.",
    id: siteURL,
    link: siteURL,
    language: "en",
    image: `${siteURL}/og-image.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Sebastian Graz`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/rss.xml`,
    },
    author: {
      name: "Sebastian Graz",
      email: "hi@graz.io",
      link: siteURL,
    },
  });

  // Add all articles to the feed
  entryMeta
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .forEach((post) => {
      feed.addItem({
        title: post.title || "",
        id: `${siteURL}/articles/${post.id}`,
        link: `${siteURL}/articles/${post.id}`,
        description: post.description || "",
        date: post.date,
        // You might want to add content here if you have access to the full article content
      });
    });

  return feed;
};
