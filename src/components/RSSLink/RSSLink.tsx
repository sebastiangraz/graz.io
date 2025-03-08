/** @jsxImportSource theme-ui */

interface RSSLinkProps {
  href?: string;
  title?: string;
}

// SVG for RSS icon
const RSSIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>
);

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
        "&:hover, &:focus": {
          "& > div": {
            gap: "8px",
            transition: "gap 0.5s ease",
          },
          "& span": {
            opacity: 1,
            maxWidth: "9ch",
            transition: "opacity 0.5s ease 0.3s, max-width 0.5s ease",
          },
        },
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          transition: "gap 0.5s ease 0.3s",
          color: "textDim",
        }}
      >
        <RSSIcon />
        <span
          sx={{
            opacity: 0,
            maxWidth: "0",
            overflow: "hidden",
            whiteSpace: "nowrap",
            transition: "max-width 0.5s ease 0.3s, opacity 0.5s ease",
          }}
        >
          RSS feed
        </span>
      </div>
    </a>
  );
};
