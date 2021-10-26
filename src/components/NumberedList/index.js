/** @jsxImportSource theme-ui */

import { Text } from "theme-ui";

export const NumberedList = ({
  labelColor,
  bgColor,
  horizontal,
  labels,
  ...rest
}) => {
  return (
    <ul
      {...rest}
      sx={{
        ...(horizontal && {
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          columnGap: 8,
        }),
        p: 0,
        display: "grid",
        rowGap: 7,
        mb: 10,
      }}
    >
      {labels.map((label, i) => {
        return (
          <li
            key={i}
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              alignItems: "center",
              maxWidth: 340,
              columnGap: 7,
              mt: 2,
              listStyle: "none",
            }}
          >
            <span
              sx={{
                width: "3.2em",
                height: "3.2em",
                borderRadius: "pill",
                display: "inline-grid",
                alignItems: "center",
                justifyContent: "center",
                bg: bgColor ? bgColor : "text",
                color: labelColor ? labelColor : "#fff",
              }}
            >
              {i + 1}
            </span>
            <Text variant="label" m={0}>
              {label}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};
