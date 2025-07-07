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
import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { CardContainer } from "@/components/card-container";
const featureRequests = [
  {
    id: 1,
    title: "Add dark mode and light mode to the app",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    status: "approved",
    upvotes: 128,
  },
  {
    id: 2,
    title: "Enable 2FA login with SMS or authenticator app",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    status: "in-progress",
    upvotes: 95,
  },
  {
    id: 3,
    title: "Integrate with Google Calendar for reminders",
    name: "Clara Lee",
    email: "clara.lee@example.com",
    status: "pending",
    upvotes: 72,
  },
  {
    id: 4,
    title: "Export data to Excel and CSV formats",
    name: "David Kim",
    email: "david.kim@example.com",
    status: "completed",
    upvotes: 84,
  },
  {
    id: 5,
    title: "Add real-time notifications for team updates",
    name: "Ella Nguyen",
    email: "ella.nguyen@example.com",
    status: "approved",
    upvotes: 110,
  },
  {
    id: 6,
    title: "Include a public roadmap page",
    name: "Frank Turner",
    email: "frank.turner@example.com",
    status: "pending",
    upvotes: 63,
  },
  {
    id: 7,
    title: "Allow custom branding (logo and color themes)",
    name: "Grace Park",
    email: "grace.park@example.com",
    status: "in-progress",
    upvotes: 77,
  },
  {
    id: 8,
    title: "Support for right-to-left (RTL) languages",
    name: "Henry Zhao",
    email: "henry.zhao@example.com",
    status: "rejected",
    upvotes: 29,
  },
  {
    id: 9,
    title: "Mobile app version for iOS and Android",
    name: "Isla Patel",
    email: "isla.patel@example.com",
    status: "completed",
    upvotes: 145,
  },
  {
    id: 10,
    title: "Auto-save drafts while editing content",
    name: "Jack Wilson",
    email: "jack.wilson@example.com",
    status: "approved",
    upvotes: 102,
  },
  {
    id: 11,
    title: "Weekly summary emails for account activity",
    name: "Karen O’Neill",
    email: "karen.oneill@example.com",
    status: "pending",
    upvotes: 56,
  },
  {
    id: 12,
    title: "Webhook support for external integrations",
    name: "Liam Bennett",
    email: "liam.bennett@example.com",
    status: "in-progress",
    upvotes: 69,
  },
  {
    id: 13,
    title: "Markdown support in text editor",
    name: "Maya Thomas",
    email: "maya.thomas@example.com",
    status: "completed",
    upvotes: 88,
  },
  {
    id: 14,
    title: "Bulk user import with CSV upload",
    name: "Nora Adams",
    email: "nora.adams@example.com",
    status: "approved",
    upvotes: 76,
  },
  {
    id: 15,
    title: "Provide audit logs for admin actions",
    name: "Omar Rivera",
    email: "omar.rivera@example.com",
    status: "rejected",
    upvotes: 34,
  },
];

export default function TopFeaturesList() {
  function onFeatureItemClicked() {
    console.log("Feature Item clicked");
  }

  return (
    <CardContainer className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Box />
          <CardTitle>Top Requests</CardTitle>
        </div>
        <Button variant="outline">See All</Button>
      </div>
      <Table>
        <TableCaption>
          <hr />
          <p className="m-10">A list of top feature requests.</p>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] text-center">#</TableHead>
            <TableHead>Feature</TableHead>
            <TableHead>Upvote</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {featureRequests.map((featureReq, index) => (
            <TableRow
              key={featureReq.id}
              className="h-14 hover:cursor-pointer hover:bg-gray-200"
              onClick={onFeatureItemClicked}
            >
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="font-medium">{featureReq.title}</TableCell>
              <TableCell>{featureReq.upvotes}</TableCell>
              <TableCell>{featureReq.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContainer>
  );
}
