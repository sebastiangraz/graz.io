/** @jsxImportSource theme-ui */

import React, { useMemo } from "react";
import { Box, Heading, Text, Grid, Link } from "theme-ui";
import { motion } from "framer-motion";
import { GridParent } from "@/components";

// Interface for the article metadata
interface ArticleMetadata {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  featured: boolean;
}

// Interface for article module
interface ArticleModule {
  default: React.ComponentType;
  metadata: ArticleMetadata;
}

const ArticlesIndex = () => {
  // Use Vite's import.meta.glob to find all article files
  const articleModules = import.meta.glob<ArticleModule>("./*.tsx", { eager: true });

  // Extract and sort articles by date
  const articles = useMemo(() => {
    return Object.entries(articleModules)
      .filter(([path]) => !path.includes("index.tsx")) // Exclude this index file
      .map(([path, module]) => {
        // Extract the slug from the file path
        const slug = path.replace("./", "").replace(".tsx", "");

        return {
          slug,
          ...module.metadata,
        };
      })
      .sort((a, b) => {
        // Sort by date, newest first
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      });
  }, [articleModules]);

  return (
    <GridParent sx={{ rowGap: "clamp(8rem, 16vw, 16rem)" }}>
      <Box
        sx={{
          gridColumn: ["2/span 8", "2 / span 8"],
        }}
      >
        {" "}
        {articles.length > 0 ? (
          <Grid gap={4} columns={[1, null, 2]}>
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1, // Stagger the animations
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "8px",
                    transition: "all 0.2s",
                    "&:hover": {
                      bg: "muted",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Link
                    href={`/articles/${article.slug}`}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Text
                        sx={{
                          fontSize: 1,
                          color: "primary",
                          mb: 2,
                          display: "block",
                        }}
                      >
                        {new Date(article.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Text>
                      <Heading as="h2" sx={{ fontSize: [3, 4], mb: 2 }}>
                        {article.title}
                      </Heading>
                      <Text sx={{ fontSize: 2, color: "textDim" }}>{article.description}</Text>
                    </Box>
                  </Link>
                </Box>
              </motion.div>
            ))}
          </Grid>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Box sx={{ textAlign: "center", py: 5 }}>
              <Text>No articles found.</Text>
            </Box>
          </motion.div>
        )}
      </Box>

      <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}></Box>
    </GridParent>
  );
};

export default ArticlesIndex;
