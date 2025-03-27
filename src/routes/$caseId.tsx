/** @jsxImportSource theme-ui */

import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/components/App";
import { Layout } from "@/components";
import { PropMap } from "@/utils/PropMap";

export const Route = createFileRoute("/$caseId")({
  validateSearch: (search: Record<string, unknown>) => {
    return {};
  },
  loader: ({ params: { caseId } }) => {
    const slugs = Object.keys(PropMap());
    // If caseId exists in our PropMap, this is a valid case study
    if (slugs.includes(caseId)) {
      return { caseId };
    }
    // If not found and not the home route, throw 404
    if (caseId !== "") {
      throw new Error("Case study not found");
    }
    // Empty caseId means we're on the home route
    return { caseId };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <App />
    </Layout>
  );
}
