"use client";
import { ThemeProvider as Provider } from "next-themes";
import { useState, useEffect, FC, PropsWithChildren, ReactElement } from "react";

export const  ThemeProvider: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Provider attribute="class" defaultTheme="dark">
      {children}
    </Provider>
  );
}
