/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";

type DefinitionItem = {
  term: string;
  description: string | number;
};

type DefinitionTableProps = {
  items: DefinitionItem[];
};

export const DefinitionTable = ({ items }: DefinitionTableProps) => {
  return (
    <Box
      as="dl"
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
        gap: ["1rem 3rem", "2em 4rem"],
        my: 4,
        mx: 0,
        "@media (--1)": {
          gridColumn: "4 / 12",
        },
      }}
    >
      {items.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Text
            as="dt"
            variant="caps"
            sx={{
              color: "textDim",
              mb: 1,
            }}
          >
            {item.term}
          </Text>
          <Text
            as="dd"
            sx={{
              m: 0,
              color: "text",
            }}
          >
            {item.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
