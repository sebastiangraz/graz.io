/** @jsxImportSource theme-ui */

import { Text, Container, Heading } from "theme-ui";
import { Img } from "@/pages/articles/Img";
export const metadata = {
  title: "First Article Title",
  description: "This is the description for the first article",
  publishDate: "2023-05-15",
  author: "Sebastian Graz",
  featured: true,
};

const ArticleOne = () => {
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
      <Img src="bayleaf.png" />
      <Text sx={{ fontSize: [2, 3], lineHeight: "body" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
          Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
        </p>

        <p>
          Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem
          lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a
          semper sed, adipiscing id dolor.
        </p>
      </Text>
    </Container>
  );
};

export default ArticleOne;
