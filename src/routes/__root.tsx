/** @jsxImportSource theme-ui */

import * as React from "react";
import { List } from "@/components/List";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Logo } from "@/components/Logo";
import { Link, Text } from "theme-ui";
import { EmailLink, Link as TanstackLink } from "@/components";
import { m } from "framer-motion";
import { useState } from "react";

import resume from "@/assets/cv-sebastiangraz.pdf";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
