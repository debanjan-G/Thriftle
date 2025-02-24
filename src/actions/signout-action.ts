"use server";

import { signOut } from "next-auth/react";

export const signoutAction = async () => {
  console.log("signing out user...");

  return signOut();
};
