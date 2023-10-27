import ListUsers from "@components/initial-data-list-users";
import { User } from "@utils/types";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

export default async function Page() {
  const users = await getUsers();

  return <ListUsers users={users} />;
}
