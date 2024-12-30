"use client";

import { usePathname, useRouter, routing } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";

export function LangSwitcher({ trigger }: { trigger?: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = (locale: (typeof routing)["locales"][number]) => {
    return () => router.replace(pathname, { locale: locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button variant="ghost" size="icon">
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle language</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={switchLang("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={switchLang("fr")}>Français</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
