/** @jsxImportSource theme-ui */

interface RSSLinkProps {
  href?: string;
  title?: string;
}

export const RSSLink = ({ href = "/rss.xml", title = "Subscribe via RSS" }: RSSLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        placeSelf: "center",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        borderRadius: "4px",
        transition: "all 0.2s ease",
        position: "relative",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          color: "textDim",
        }}
      >
        RSS
      </div>
    </a>
  );
};
