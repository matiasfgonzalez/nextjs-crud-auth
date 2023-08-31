"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-red-200 text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="btn btn-primary btn-sm">
          Home
        </Link>
        {session?.user ? (
          <>
            <Link href="/dashboard" className="btn btn-primary btn-sm">
              Dashboard
            </Link>
            <button onClick={() => signOut()} className="btn btn-danger btn-sm">
              Signout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
