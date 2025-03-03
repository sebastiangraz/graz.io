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
    <dl
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr 1fr", null, "1fr 1fr 1fr 1fr"],
        gap: ["4em 1rem"],
        mt: "3rem",
        mb: "3rem",
        mx: 0,
        gridColumn: ["3 / 13", null, "3 / 13"],
      }}
    >
      {items.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Text
            as="dt"
            variant="caps"
            sx={{
              textAlign: "center",
              color: "textDim",
              mb: 1,
            }}
          >
            {item.term}
          </Text>
          <Text
            as="dd"
            variant="label"
            sx={{
              m: 0,
              textAlign: "center",
              color: "text",
            }}
          >
            {item.description}
          </Text>
        </Box>
      ))}
    </dl>
  );
};
