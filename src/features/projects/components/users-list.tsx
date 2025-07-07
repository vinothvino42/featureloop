"use client";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const users = [
  { id: "USR001", name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: "USR002", name: "Bob Smith", email: "bob.smith@example.com" },
  { id: "USR003", name: "Carol Martinez", email: "carol.martinez@example.com" },
  { id: "USR004", name: "David Lee", email: "david.lee@example.com" },
  { id: "USR005", name: "Evelyn Turner", email: "evelyn.turner@example.com" },
  { id: "USR006", name: "Frank Harris", email: "frank.harris@example.com" },
  { id: "USR007", name: "Grace Kim", email: "grace.kim@example.com" },
  { id: "USR008", name: "Henry Scott", email: "henry.scott@example.com" },
  { id: "USR009", name: "Irene Brooks", email: "irene.brooks@example.com" },
  { id: "USR010", name: "Jack Nguyen", email: "jack.nguyen@example.com" },
  { id: "USR011", name: "Katherine Reed", email: "katherine.reed@example.com" },
  { id: "USR012", name: "Liam Walker", email: "liam.walker@example.com" },
  { id: "USR013", name: "Mia Collins", email: "mia.collins@example.com" },
  { id: "USR014", name: "Noah Ramirez", email: "noah.ramirez@example.com" },
  { id: "USR015", name: "Olivia Sanders", email: "olivia.sanders@example.com" },
  { id: "USR016", name: "Paul Edwards", email: "paul.edwards@example.com" },
  { id: "USR017", name: "Quinn Bennett", email: "quinn.bennett@example.com" },
  { id: "USR018", name: "Rachel Fisher", email: "rachel.fisher@example.com" },
  { id: "USR019", name: "Samuel Gray", email: "samuel.gray@example.com" },
  { id: "USR020", name: "Tina Morgan", email: "tina.morgan@example.com" },
];

export default function UsersList() {
  function onUserItemClicked() {
    console.log("User Item clicked");
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px] text-center">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow
            key={user.id}
            className="h-14 hover:cursor-pointer hover:bg-gray-200"
            onClick={onUserItemClicked}
          >
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>
        <hr />
        <p className="m-10">
          A list of users who requested features and comments.
        </p>
      </TableCaption>
    </Table>
  );
}
