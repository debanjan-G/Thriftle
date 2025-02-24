"use client";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Thriftle</h1>
      <Button radius="md" variant="bordered" color="primary">
        Click Me
      </Button>
    </div>
  );
}
