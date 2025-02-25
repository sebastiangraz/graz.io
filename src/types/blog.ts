// Blog article metadata interface
export interface ArticleMetadata {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  featured: boolean;
}

// Combined article data with slug
export interface Article extends ArticleMetadata {
  slug: string;
}

// Article module interface (what import.meta.glob returns)
export interface ArticleModule {
  default: React.ComponentType;
  metadata: ArticleMetadata;
}
