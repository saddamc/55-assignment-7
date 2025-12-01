"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="fixed inset-x-0 h-16 w-full bg-background border-b dark:border-slate-700/70 z-30">
      <nav className="h-full max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo with consistent padding */}
          <Link href="/" className="flex-shrink-0 ">
            <Logo />
          </Link>

          {/* Desktop Menu with consistent horizontal spacing */}
          <NavMenu className="hidden md:block" />
          

          {/* Actions and Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="p-4 border-t border-gray-500">
            {session.status === "authenticated" ? (
              <Button
                variant="destructive"
                className="w-full justify-start gap-2 cursor-pointer"
                onClick={() => signOut()}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            ) : (
              <Button
                variant="default"
                className="w-full justify-start gap-2 cursor-pointer"
                onClick={() => signIn()}
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            )}
          </div>


            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
