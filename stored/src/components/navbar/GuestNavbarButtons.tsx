import Link from "next/link";

type GuestNavbarButtonsProps = {
  mobileView?: boolean;
};

export default function GuestNavbarButtons({
  mobileView,
}: GuestNavbarButtonsProps) {
  const linkClassName = `text-white ${
    mobileView && "block"
  } hover:bg-white hover:text-black rounded-lg p-2 dark:text-indigo-100 dark:hover:bg-indigo-200 dark:hover:text-neutral-800`;

  return (
    <div className={mobileView ? "md:hidden" : "hidden md:block"}>
      <div
        className={
          mobileView
            ? "px-2 pt-2 pb-3 space-y-1 block text-center"
            : "ml-4 flex items-center space-x-4"
        }
      >
        <Link href="/login" className={linkClassName}>
          Login
        </Link>
        {/* do we need the register link here? Users can register from the login page if they don't want to use socials to sign in /Otto */}
        <Link href="/register" className={linkClassName}>
          Register
        </Link>
      </div>
    </div>
  );
}
