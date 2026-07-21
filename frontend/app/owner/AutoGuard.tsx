"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isChecking, setIsChecking] = useState(true);

  const checkingRef = useRef(false);

  const checkSession = useCallback(async () => {
    if (checkingRef.current) return;

    checkingRef.current = true;

    setIsChecking(true);
    setIsAuthenticated(false);

    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        window.location.replace("/login");
        return;
      }

      setIsAuthenticated(true);
    } catch (error) {
      console.error("Pemeriksaan sesi gagal:", error);

      window.location.replace("/login");
    } finally {
      checkingRef.current = false;
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    void checkSession();

    function handlePageShow() {
      void checkSession();
    }

    function handlePopState() {
      void checkSession();
    }

    function handleFocus() {
      void checkSession();
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        void checkSession();
      }
    }

    window.addEventListener("pageshow", handlePageShow);

    window.addEventListener("popstate", handlePopState);

    window.addEventListener("focus", handleFocus);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);

      window.removeEventListener("popstate", handlePopState);

      window.removeEventListener("focus", handleFocus);

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [checkSession]);

  if (isChecking || !isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          color: "#6B7280",
          backgroundColor: "#FFFFFF",
        }}
      >
        Memeriksa sesi...
      </div>
    );
  }

  return <>{children}</>;
}
