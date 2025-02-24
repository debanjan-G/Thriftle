import { auth } from "@/auth";
import Hero from "@/components/Hero";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {session?.user && (
        <div className="border border-slate-300 rounded p-4 w-1/2 mx-auto my-4">
          <p>Email: {session.user.email}</p>
          <p>Username: {session.user.name}</p>
          {/* <Image
            src={session.user.image || ""}
            className="rounded-full"
            height={42}
            width={42}
            alt="pfp"
          /> */}
        </div>
      )}
      <Hero />
    </div>
  );
}
