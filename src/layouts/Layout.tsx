import { Footer, Navbar } from "@/components";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
