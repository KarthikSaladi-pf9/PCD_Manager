"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SessionTimeoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (!data?.user) {
          router.replace("/auth");
        }
      } catch {
        router.replace("/auth");
      }
    };

    const interval = setInterval(checkSession, 30 * 1000); // check every 30s

    return () => clearInterval(interval);
  }, [router]);

  return <>{children}</>;
}
