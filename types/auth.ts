import { Entity } from "./base";

export type AuthResult = {
  token: string | null;
  user: User;
};

export type User = Entity<{
  email: string;
  name: string;
  image: string | null | undefined;
  emailVerified: boolean;
  updatedAt: Date;
}>;
