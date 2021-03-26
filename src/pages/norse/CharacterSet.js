/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";
import * as React from "react";
import { Character } from "./Character";
import { CharacterWeight } from "./CharacterWeight";

export function CharacterSet() {
  const characters = [
    {
      title: "letters",
      character: [
        { char: "Aa" },
        { char: "Bb" },
        { char: "Cc" },
        { char: "Dd" },
        { char: "Ee" },
        { char: "Ff" },
        { char: "Gg" },
        { char: "Hh" },
        { char: "Ii" },
        { char: "Jj" },
        { char: "Kk" },
        { char: "Ll" },
        { char: "Mm" },
        { char: "Oo" },
        { char: "Pp" },
        { char: "Qq" },
        { char: "Rr" },
        { char: "Ss" },
        { char: "Tt" },
        { char: "Uu" },
        { char: "Vv" },
        { char: "Ww" },
        { char: "Xx" },
        { char: "Yy" },
        { char: "Zz" },
      ],
    },
    {
      title: "numbers",
      character: [
        { char: "1" },
        { char: "2" },
        { char: "3" },
        { char: "4" },
        { char: "5" },
        { char: "6" },
        { char: "7" },
        { char: "8" },
        { char: "9" },
        { char: "0" },
        { char: "10", feature: `"zero"` },
        { char: "0/10", feature: `"frac","zero"` },
        { char: "3/8", feature: `"frac"` },
        { char: "A2", feature: `"sups"` },
        { char: "H2", feature: `"subs"` },
      ],
    },
    {
      title: "arrows",
      character: [
        { char: "↑" },
        { char: "↗" },
        { char: "→" },
        { char: "↘" },
        { char: "↓" },
        { char: "↙" },
        { char: "←" },
        { char: "↖" },
        { char: "↔" },
        { char: "↕" },
      ],
    },
    {
      title: "currency",
      character: [
        { char: "¢" },
        { char: "¤" },
        { char: "$" },
        { char: "€" },
        { char: "ƒ" },
        { char: "₺" },
        { char: "₽" },
        { char: "£" },
        { char: "¥" },
        { char: "₹" },
      ],
    },
    {
      title: "punctuation",
      character: [
        { char: "!¡" },
        { char: "?¿" },
        { char: "#" },
        { char: "/ \\" },
        { char: "()" },
        { char: "{}" },
        { char: "[]" },
        { char: "“”" },
        { char: "‘’" },
        { char: "«»" },
        { char: "‹›" },
        { char: "+" },
        { char: "×" },
        { char: "÷" },
        { char: "=" },
        { char: "≠" },
        { char: "<>" },
        { char: "≤≥" },
        { char: "±" },
        { char: "≈" },
        { char: "¬" },
        { char: "~" },
        { char: "∞" },
        { char: "∫" },
        { char: "∏" },
        { char: "∑" },
        { char: "√" },
        { char: "µ" },
        { char: "∂" },
        { char: "∅" },
        { char: "%" },
        { char: "‰" },
        { char: "◊" },
        { char: "@" },
        { char: "&" },
        { char: "¶" },
        { char: "§" },
        { char: "©" },
        { char: "®" },
        { char: "™" },
        { char: "8°" },
        { char: "|" },
        { char: "¦" },
        { char: "†" },
        { char: "‡" },
        { char: "№" },
      ],
    },
    {
      title: "diacritics",
      character: [
        { char: "Ää" },
        { char: "Ċċ" },
        { char: "Èè" },
        { char: "Śś" },
        { char: "Űű" },
        { char: "Ôô" },
        { char: "Řř" },
        { char: "Ŵŵ" },
        { char: "Ğğ" },
        { char: "Åå" },
        { char: "Ññ" },
        { char: "Āā" },
        { char: "ģ" },
        { char: "Ŗŗ" },
        { char: "Çç" },
        { char: "Ąą" },
        { char: "Ðđ" },
        { char: "Ŧŧ" },
        { char: "Ħ" },
        { char: "Łł" },
      ],
    },
  ];

  const [character, setCharacter] = React.useState("Aa");
  const [feature, setFeature] = React.useState("");
  const [slideValue, setSlideValue] = React.useState(50);

  return (
    <React.Fragment>
      <div
        sx={{
          backgroundColor: "background",
          gridColumn: ["span 8", "1 / span 4"],
          gridRow: ["span 1", "span 1"],
          position: ["sticky", "relative"],
          top: "0",
          zIndex: 1,
          width: ["calc(100% + 1px)", "100%"],
          boxShadow: ["0px 1px 0px 0px currentColor;", "none"],
        }}
      >
        <div
          sx={{
            position: ["relative", "sticky"],
            top: "0",
            display: ["block", "grid"],
            gridGap: [3],
            alignItems: "baseline",
            height: "100%",
            maxHeight: ["none", "calc(100vh - 172px)", "100vh"],
            alignContent: "center",
            gridTemplateColumns: ["1fr", "1fr"],
          }}
        >
          <div
            sx={{
              gridGap: [3, 0],
              display: "grid",
              gridTemplateColumns: ["1fr 1fr", "1fr"],
              alignItems: ["center", "unset"],
            }}
          >
            <span
              sx={{
                fontVariationSettings: `"wght" ${slideValue}`,
                fontFeatureSettings: feature,
                marginBottom: ["6px", "5vw"],
                paddingY: ["1.5rem", 0],
                lineHeight: ["0.8"],
                letterSpacing: "-0.05em",
                fontFamily: "norse",
                fontSize: ["7em", "11em", "13vw", "min(15vw, 300px)"],
                display: "block",
              }}
            >
              {character}
            </span>

            <div>
              <CharacterWeight setSlideValue={setSlideValue}></CharacterWeight>
              <Text
                mt={[1, 1, 3, 3]}
                color="text"
                sx={{ display: ["none", "block"], paddingRight: [3, 4, 5, 6] }}
              >
                font-variation-settings: "wght"&nbsp;{slideValue};
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div sx={{ gridColumn: ["span 8", "5 / span 4"], gridRow: "span 1" }}>
        {characters.map((charset) => (
          <Box
            key={charset.title}
            mb={5}
            sx={{
              display: "grid",
              gridTemplateColumns: [
                "repeat(5, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
                "repeat(5, 1fr)",
              ],
            }}
          >
            {charset.character.map((char) => (
              <Character
                char={char}
                character={character}
                setCharacter={setCharacter}
                setFeature={setFeature}
                title={charset.title}
                key={char.char}
              ></Character>
            ))}
          </Box>
        ))}
      </div>
    </React.Fragment>
  );
}
