"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ContactMeForm } from "./contact-me-form";

export function HireMe({ trans }: { trans: Record<string, string> }) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 528); // Adjust this value as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isLargeScreen) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{trans?.hireMe}</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{trans?.hireMeTitle}</DialogTitle>
            <DialogDescription>{trans?.hireMeDescription}</DialogDescription>
          </DialogHeader>
          <ContactMeForm trans={trans} type="HIRE ME" />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{trans?.hireMe}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{trans?.hireMeTitle}</DrawerTitle>
          <DrawerDescription>{trans?.hireMeDescription}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <ContactMeForm trans={trans} type="HIRE ME" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
