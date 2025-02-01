import { ReactNode } from "react";
import BrandLogo from "./components/BrandLogo.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BrandLogo className={`hidden max-lg:flex items-center pl-8`} />
      <main
        className={`flex min-h-[calc(100dvh-5rem)] max-lg:flex-col-reverse `}
      >
        {children}
      </main>
    </>
  );
}
