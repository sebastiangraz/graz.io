/** @jsxImportSource theme-ui */
import { useState, FormEvent, useRef } from "react";
import { Button, Input, Box, Text } from "theme-ui";

interface EmailSignupProps {
  placeholder?: string;
  cta?: string;
}

function generateId(cta: string) {
  return cta.toLowerCase().replace(/ /g, "-");
}

export const EmailSignup = ({ placeholder = "Enter your email", cta = "Subscribe" }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;

    if (input) {
      if (!input.validity.valid) {
        if (input.validity.valueMissing) {
          setError("Please enter an email address");
        } else if (input.validity.typeMismatch) {
          setError("Please enter a valid email address");
        } else {
          setError("Please check your email address");
        }
        return;
      }
    }

    try {
      const formData = new FormData(e.currentTarget);

      // Check if we're in development mode
      if (import.meta.env.DEV) {
        console.log("Development mode - Form data:", Object.fromEntries(formData));
        setError("");
        setSubmitted(true);
        return;
      }

      // Production mode - submit to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setError("");
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Box id={generateId(cta)}>
      <form
        name="email-signup"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "grid",
          position: "relative",
          gap: "0.5rem",
        }}
      >
        <input type="hidden" name="form-name" value="email-signup" />
        <input type="hidden" name="bot-field" />
        <Input
          data-1p-ignore
          ref={inputRef}
          type="email"
          name="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          required
          sx={{
            all: "unset",
            gridArea: "1/1",
            cursor: "text",
            backgroundColor: "var(--theme-ui-colors-background)",
            boxShadow: error
              ? "0 0 0 1px var(--theme-ui-colors-textDim) inset"
              : "0 0 0 1px color-mix(in srgb, var(--theme-ui-colors-text) 12%, transparent) inset",
            display: "flex",
            minHeight: "4rem",
            padding: "0 1rem",
            width: "100%",
            boxSizing: "border-box",
            "&:focus-within": {
              boxShadow: "0 0 0 1px color-mix(in srgb, var(--theme-ui-colors-text) 24%, transparent) inset",
            },
          }}
        />
        {error && (
          <Text
            sx={{
              color: "var(--theme-ui-colors-textDim)",
              position: "relative",
              left: 0,
              marginTop: "0.25rem",
            }}
          >
            {error}
          </Text>
        )}

        <Button
          type="submit"
          disabled={email.length === 0 || error !== ""}
          sx={{
            all: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100px",
            height: "auto",
            aspectRatio: ["1/1", "unset"],
            margin: ["0 0 0 auto", "1rem 1rem 1rem auto"],
            gridArea: "1/1",
            cursor: "pointer",
            background: "var(--theme-ui-colors-text)",
            color: "var(--theme-ui-colors-background)",
            padding: [0, "0.5rem 1rem"],
            opacity: email.length === 0 ? 0.5 : 1,
            transition: "opacity 0.2s ease",
            "&:disabled": {
              cursor: "not-allowed",
            },
          }}
        >
          <span sx={{ display: ["none", "block"] }}>{error ? "×" : cta}</span>
          <span sx={{ display: ["block", "none"] }}>{error ? "×" : "→"}</span>
        </Button>
      </form>
    </Box>
  );
};
