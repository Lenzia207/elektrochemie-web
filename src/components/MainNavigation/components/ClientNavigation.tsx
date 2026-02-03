"use client";
import React from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavItems } from "./NavItems";
import { NavBody } from "./NavBody";
import { Navbar } from "./Navbar";
import {
  MobileMainNavigation,

} from "@/components/MainNavigation/MobileMainNavigation";
import { NavigationItem } from "../types";

interface ClientNavigationProps {
  navItems: NavigationItem[];
  trackHeaderOverlap?: boolean;
}

export default function ClientNavigation({
  navItems,
  trackHeaderOverlap = false,
}: ClientNavigationProps) {
  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo image="/images/header/adlerLogo.png" url="https://ziviltechniker.at/mitglied/958130" />
          <NavbarLogo image="/images/logo.svg" showLanguageSwitcher />
          <NavItems items={navItems} trackHeaderOverlap={trackHeaderOverlap} />
        </NavBody>

        <MobileMainNavigation navItems={navItems} trackHeaderOverlap={trackHeaderOverlap} />

      </Navbar>
    </div>
  );
}
