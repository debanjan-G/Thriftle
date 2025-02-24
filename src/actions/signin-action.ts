"use server";

import * as auth from "@/auth";

export const signinAction = async () => {
  console.log("signing in user...");
  return auth.signIn("google");
};
