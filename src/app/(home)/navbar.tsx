"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import React from "react"

import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { NavbarSidebar } from "./navbar-sidebar"
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

interface NavbarItemProps {
    href: string;
    children?: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({
    href,
    children,
    isActive,
}: NavbarItemProps) => {
    return (
        <Link href={href}>
            <Button variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", 
                isActive && "bg-black text-white hover:bg-black hover:text-white"
            )}>
                {children}
            </Button>
        </Link>
    );
}

const navBarItems = [
    {
        href: "/",
        children: "Home",
    },
    {
        href: "/about",
        children: "About",
    },
    {
        href: "/features",  
        children: "Features",
    },
    {
        href: "/pricing",
        children: "Pricing",
    },
    {
        href: "/contact",
        children: "Contact",
    },
]

export const Navbar = () => {
    const pathname = usePathname();
    const[isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn("text-5xl font-semibold" , poppins.className)}>DesiKart</span>
            </Link>
            <NavbarSidebar
                items={navBarItems}
                open={isSidebarOpen}
                onOpenChange={setIsSidebarOpen}
            />
            <div className="items-center gap-4 hidden lg:flex ">
                {navBarItems.map((item) => (
                    <NavbarItem key={item.href} 
                        href={item.href} 
                        isActive={pathname === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>
            <div className="hidden lg:flex">
               <Button
                    asChild
                    variant="secondary"
                    className="border-l border-t-0 border-b-0 border-r0 px-12 h-full rounded-none bg-white text-black hover:bg-pink-400 transition-colors text-lg" 
               >
                    <Link href='/sign-in'>Log in</Link>
               </Button>
              <Button
                    asChild
                    className="border-l border-t-0 border-b-0 border-r0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 transition-colors text-lg" 
               ><Link href='/sign-up'>Start selling</Link></Button> 
            </div>
            <div className="flex lg:hidden item-center justify-cneter">
                <Button
                    variant="ghost"
                    className="size-12 border-transparent bg-white"
                    onClick={()=>setIsSidebarOpen(true)}
                    >
                        <MenuIcon/>
                    </Button>
            </div>
        </nav>
    )
}
