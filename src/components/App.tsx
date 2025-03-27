import { CaseWrapper, Case, ScrollToTop, CaseMeta, GridParent } from "@/components";
import "@/base.css";
import { PropMap } from "@/utils/PropMap";
import { Helmet } from "react-helmet-async";

// Article routes setup using import.meta.glob - update to include folders

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Sebastian Graz · Studio</title>
        <meta
          name="description"
          content="Independent design consultancy focused on branding, digital design and beautiful implementation."
        />
      </Helmet>
      <ScrollToTop clearURL />
      <CaseWrapper>{cases}</CaseWrapper>
    </>
  );
};

const slugKeys = Object.keys(PropMap());
const slugValues = Object.values(PropMap());

const routes = Object.entries(
  import.meta.glob<string | string[] | any>(
    ["../pages/**/index.tsx"], // ignore components
    {
      eager: true,
    },
  ),
);

const cases = routes
  .map(([relativePath, module]) => {
    const Page = module.default;
    const path = relativePath.replace("./pages", "").replace("/index.tsx", "");
    const slug = path.replace("./", "");
    return {
      slug,
      path,
      Page,
    };
  })
  .filter(({ slug }) => slugKeys.includes(slug))
  .sort((a, b) => {
    const indexA = slugKeys.indexOf(a.slug);
    const indexB = slugKeys.indexOf(b.slug);

    return indexA - indexB;
  })
  .map(({ path, slug, Page }, i) => {
    const hideCaseMeta = slugValues[i]?.hideCaseMeta || false;

    return (
      <Case key={path} index={i} slug={slug} propmap={slugValues[i]}>
        {!hideCaseMeta && (
          <GridParent>
            <CaseMeta {...slugValues[i]} />
          </GridParent>
        )}

        <Page></Page>
      </Case>
    );
  });
