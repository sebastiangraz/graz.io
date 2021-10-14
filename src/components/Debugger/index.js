/** @jsxImportSource theme-ui */

export const Debugger = ({
  data,
  index,
  height,
  position,
  isActiveState,
  debug,
}) => {
  return (
    debug && (
      <p
        sx={{
          mt: "-10px",
          fontFamily: "monospace",
          fontSize: 3,
          position: "fixed",
          top: (index + 1) * 17,
          left: 0,
          zIndex: 10000,
          px: 3,
        }}
      >
        <span
          sx={{
            bg: data?.bg,
            px: 3,
            color: data?.color,
            width: 210,
            mr: 20,
            display: "inline-block",
          }}
        >
          {data?.slug} — active: {isActiveState ? "[TRUE]" : "false"}{" "}
        </span>
        height: {Math.trunc(height(0))} pos: {Math.trunc(position(0))}px
      </p>
    )
  );
};
