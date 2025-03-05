/** @jsxImportSource theme-ui */
import { useState, FormEvent } from "react";
import { Button, Input, Box, Text } from "theme-ui";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Box
        sx={{
          textAlign: "center",
          borderRadius: "4px",
        }}
      >
        <Text>Thanks for subscribing! I'll be in touch soon.</Text>
      </Box>
    );
  }

  return (
    <form
      name="email-signup"
      method="POST"
      data-netlify="true"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <input type="hidden" name="form-name" value="email-signup" />
      <Input
        data-1p-ignore
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{
          all: "unset",
          cursor: "text",
          border: "1px solid color-mix(in srgb, var(--theme-ui-colors-text) 12%, transparent)",
          flex: 1,
          padding: "0.5rem 1rem",
          fontSize: "16px",
        }}
      />
      <Button
        type="submit"
        disabled={email.length === 0}
        sx={{
          all: "unset",
          cursor: "pointer",
          background: "var(--theme-ui-colors-text)",
          color: "var(--theme-ui-colors-background)",
          padding: "0.5rem 1rem",
          opacity: email.length === 0 ? 0.5 : 1,
          transition: "opacity 0.2s ease",
          "&:disabled": {
            cursor: "not-allowed",
          },
        }}
      >
        Subscribe
      </Button>
    </form>
  );
};
