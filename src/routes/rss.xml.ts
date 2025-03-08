import { createFileRoute } from "@tanstack/react-router";
import { generateRssFeed } from "@/utils/rss";

export const Route = createFileRoute("/rss/xml")({
  loader: () => {
    const feed = generateRssFeed();
    return new Response(feed.rss2(), {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
});
