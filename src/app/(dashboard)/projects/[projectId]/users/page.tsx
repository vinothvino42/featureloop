import { CardContainer } from "@/components/card-container";
import UsersList from "@/features/projects/components/users-list";

export default function UsersPage() {
  return (
    <CardContainer className="mt-2 flex flex-col gap-6">
      <p className="mt-2">
        You can add or update user information by calling the
        `Featureloop.updateUser()` function provided in the SDK. This function
        allows you to set user-specific details such as ID, name, or other
        attributes relevant to your app. Ensure this method is invoked whenever
        there&apos;s a change in user data to keep it current within
        Featureloop.
      </p>
      <UsersList />
    </CardContainer>
  );
}
