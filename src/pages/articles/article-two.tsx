/** @jsxImportSource theme-ui */

import { Text, Container, Heading } from "theme-ui";

export const metadata = {
  title: "Design Systems and Brand Identity",
  description: "Exploring the relationship between design systems and brand identity",
  publishDate: "2023-06-22",
  author: "Sebastian Graz",
  featured: false,
};

const ArticleTwo = () => {
  return (
    <Container
      sx={{
        maxWidth: "38rem",
        mx: "auto",
        px: 3,
        py: [5, 6],
      }}
    >
      <Heading as="h1" sx={{ fontSize: [5, 6], mb: 4 }}>
        {metadata.title}
      </Heading>

      <Text
        sx={{
          color: "textDim",
          mb: 5,
          fontStyle: "italic",
        }}
      >
        Published on {new Date(metadata.publishDate).toLocaleDateString()} by {metadata.author}
      </Text>

      <Text sx={{ fontSize: [2, 3], lineHeight: "body" }}>
        <p>
          Design systems are more than just a collection of components and guidelines. They are the visual language that
          communicates your brand's personality, values, and mission.
        </p>

        <p>
          When crafted thoughtfully, a design system becomes the backbone of brand consistency across all touchpoints,
          from digital products to marketing materials and beyond.
        </p>

        <p>
          In this article, we'll explore how design systems and brand identity intersect, and how you can leverage this
          relationship to create more cohesive and impactful experiences.
        </p>
      </Text>
    </Container>
  );
};

export default ArticleTwo;
