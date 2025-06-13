import { SessionContextValue, signOut } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export type AuthenticatedNavbarButtonsProps = {
  session: SessionContextValue<true>;
  mobileView?: boolean;
};

export default function AuthenticatedNavbarButtons({
  session,
  mobileView,
}: AuthenticatedNavbarButtonsProps) {
  const linkClassName = `text-white ${
    mobileView && "block"
  } hover:bg-white hover:text-black rounded-lg p-2 dark:text-indigo-100 dark:hover:bg-indigo-200 dark:hover:text-neutral-800`;

  function handleSignOut() {
    signOut({
      redirect: false,
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex items-center justify-space-between gap-2">
      {/* NOTE: Placeholder code. This could be a menu that contains profile and logout button. */}
      <FaUser className="text-indigo-100" />

      <span className="text-white dark:text-indigo-100">
        {session.data?.user?.name || "unknown user"}
      </span>

      <Link href="/" onClick={handleSignOut} className={linkClassName}>
        Sign out
      </Link>
    </div>
  );
}
