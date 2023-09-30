"use client";

import { signOut } from "next-auth/react";

export default function ButtonLogOut() {
  return (
    <ul className="flex ml-auto items-center gap-2">
      <li>
        <button
          className="btn btn-secondary text-base-100 font-medium normal-case text-base"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </li>
    </ul>
  );
}
