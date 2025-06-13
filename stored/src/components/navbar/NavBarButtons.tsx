import React from "react";
import { useSession } from "next-auth/react";
import AuthenticatedNavbarButtons from "./AuthenticatedNavbarButtons";
import GuestNavbarButtons from "./GuestNavbarButtons";

type NavBarButtonsProps = {
  mobileView?: boolean;
};

const NavBarButtons = ({ mobileView }: NavBarButtonsProps) => {
  const session = useSession();

  return session.status === "authenticated" ? (
    <AuthenticatedNavbarButtons session={session} mobileView={mobileView} />
  ) : (
    <GuestNavbarButtons mobileView={mobileView} />
  );
};

export default NavBarButtons;
