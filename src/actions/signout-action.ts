"use server";

import * as actions from "@/auth";

export const signoutAction = async () => {
  console.log("signing out user...");

  return actions.signOut();
};
