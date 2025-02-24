"use client";

import Link from "next/link";
import { Button, Divider } from "@heroui/react";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center p-4">
        <div className="font-semibold text-3xl">
          <Link href="/">Thriftle</Link>
        </div>
        <div>
          <Link href="/dashboard" className="mx-2">
            Dashboard
          </Link>
          <Link href="/transactions" className="mx-2">
            Transactions
          </Link>
        </div>
        <div className="flex gap-4">
          <Button color="secondary">Signup</Button>
          <Button color="secondary" variant="bordered">
            Signin
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
