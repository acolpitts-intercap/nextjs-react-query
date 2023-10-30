import { Suspense } from "react";
import Counter from "@components/counter";
import ListUsers from "@components/stream-list-users";

export default async function Page() {
  return (
    <main className="flex flex-col min-h-screen">
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
