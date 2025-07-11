import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BadgeInfo, CodeXml, Github, Terminal } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <div className="flex items-center justify-between shadow-lg dark:shadow-sm dark:shadow-white p-1 rounded">
      <a className="flex items-center justify-center gap-2" href="#">
        <CodeXml className="w-6 h-6" />
        <h1 className="font-extrabold text-lg">Hark</h1>
      </a>
      <div className="flex items-center justify-center gap-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BadgeInfo />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex"
                        href="https://github.com/braveram/repo"
                      >
                        <Github className="mx-auto" />
                        <span className="text-center font-extrabold">Repo</span>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="flex" href="https://github.com/braveram">
                        <Terminal className="mx-auto" />
                        <span className="text-center font-extrabold">
                          Developer
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </div>
  );
}
