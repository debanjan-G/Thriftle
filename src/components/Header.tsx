"use client";

import Link from "next/link";
import { Button, Divider } from "@heroui/react";
import React from "react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  const handleSignup = () => {
    actions.signinAction();
  };

  const handleSignout = () => {
    actions.signoutAction();
  };

  return (
    <div>
      <div className="flex justify-evenly items-center p-4">
        <div className="font-semibold text-3xl">
          <Link href="/">Thriftly</Link>
        </div>
        <div>
          <Link href="/dashboard" className="mx-2">
            Dashboard
          </Link>
          <Link href="/transactions" className="mx-2">
            Transactions
          </Link>
        </div>

        {!session.data?.user ? (
          <div className="flex gap-4">
            <Button color="secondary" onPress={handleSignup}>
              Signup
            </Button>
            <Button color="secondary" onPress={handleSignup} variant="bordered">
              Signin
            </Button>
          </div>
        ) : (
          <Button color="danger" onPress={handleSignout} variant="bordered">
            Signout
          </Button>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default Header;
