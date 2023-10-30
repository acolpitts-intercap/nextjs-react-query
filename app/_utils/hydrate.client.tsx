"use client";

import {
  HydrationBoundary as RQHydrate,
  HydrationBoundaryProps as HydrateProps,
} from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default Hydrate;
