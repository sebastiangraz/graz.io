import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/components/App";
import { Layout } from "@/components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <App />
    </Layout>
  );
}
