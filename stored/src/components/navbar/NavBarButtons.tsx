import Link from "next/link";

type NavBarButtonsProps = {
  mobileView?: boolean;
};

const NavBarButtons = ({ mobileView }: NavBarButtonsProps) => {
  return (
    <div className={mobileView ? "md:hidden" : "hidden md:block"}>
      <div
        className={
          mobileView
            ? "px-2 pt-2 pb-3 space-y-1 block text-center"
            : "ml-4 flex items-center space-x-4"
        }
      >
        <Link
          href="/login"
          className={`text-white ${
            mobileView && "block"
          } hover:bg-white hover:text-black rounded-lg p-2`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`text-white ${
            mobileView && "block"
          } hover:bg-white hover:text-black rounded-lg p-2`}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBarButtons;
