import { Menu as MenuIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const navLinks: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#cta",
  },
];

export default function Header() {
  return (
    <div className="fixed w-full bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="inline-flex items-center gap-2">
          <span className="font-bold py-1.5 px-3 rounded-md bg-black text-white dark:bg-foreground dark:text-background">
            N
          </span>
          <span className="font-bold text-xl">Nexus Digital</span>
        </div>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex gap-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="inline-flex items-center gap-2">
          <ModeToggle />
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <span>
                    <MenuIcon />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                sideOffset={4}
                className="w-screen flex flex-col gap-2.5 px-4 py-6 rounded-none"
              >
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
