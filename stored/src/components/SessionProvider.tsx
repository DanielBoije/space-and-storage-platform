"use client";

// NOTE: we need to re-export the session provider with "use client" in use in order to access
// session context with useSession

import { SessionProvider } from "next-auth/react";
export default SessionProvider;
