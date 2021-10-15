/** @jsxImportSource theme-ui */

import { Text } from "theme-ui";

export const NumberedList = ({ labelColor, horizontal, labels, ...rest }) => {
  return (
    <ul {...rest} sx={{ p: 0, display: "grid", rowGap: 5, mb: 10 }}>
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
                bg: "text",
                color: labelColor ? labelColor : "#fff",
              }}
            >
              {i}
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
