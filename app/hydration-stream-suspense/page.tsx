import { Suspense } from "react";
import Counter from "@components/counter";
import ListUsers from "@components/stream-list-users";

export default async function Page() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <Counter />
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>loading... on initial request</p>
        }
      >
        <ListUsers />
      </Suspense>
    </main>
  );
}
