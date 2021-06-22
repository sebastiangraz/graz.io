/** @jsxImportSource theme-ui */


export function Character({ char, ref, setCharacter, setFeature, character }) {
  return (
    <div
      onMouseEnter={() => {
        setCharacter(char.char);
        setFeature(char.feature);
      }}
      ref={ref}
      sx={{
        fontFeatureSettings: char.feature,
        position: "relative",
        display: "flex",
        fontSize: [3, 4, 4, 5],
        gridColumn: "span 1",
        gridRow: "span 1",
        fontFamily: "norse",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: char.char === character && "text",
        color: char.char === character && "background",
        boxShadow: (theme) =>
          `1px 0 0 0 ${theme.colors.text}, 0 1px 0 0 ${theme.colors.text}, 1px 1px 0 0 ${theme.colors.text}, 1px 0 0 0 ${theme.colors.text} inset, 0 1px 0 0 ${theme.colors.text} inset`,
        "&:before": {
          content: '""',
          height: 0,
          display: "block",
          paddingTop: "100%",
          width: "1px",
          position: "relative",
        },
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "text",
          color: "background",
        },
      }}
    >
      {char.char}
    </div>
  );
}
