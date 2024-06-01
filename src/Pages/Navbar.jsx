import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
//  import decodedToken from "@/AuthChecker";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";
import getToken from "@/AuthChecker";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { toast } = useToast();
  const [cook, setCook] = useState();

  const signOutHandler = () => {
    if (cook) {
      Cookies.remove("access-token");
      toast({
        description: "User logged out successfully",
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    getToken(setCook);
  }, []);

  return (
    // <div className="h-14 w-full flex border-b-gray-200 border-b">
    //   <div className="w-1/5 flex justify-center items-center">
    //     <h2>BHUMI</h2>
    //   </div>
    //   <div className="flex flex-row justify-around items-center w-2/3 border-l-gray-200 border-l border-r border-r-gray-200">
    //     <Link to="/">Home</Link>
    //     <Link to="/aboutus">About Us</Link>
    //     <Link to="/campaigns">Campaigns</Link>
    //     <Link to="/blogs">Blogs</Link>
    //     {cook ? (
    //       <button
    //         type="submit"
    //         variant="ghost"
    //         onClick={() => signOutHandler()}
    //       >
    //         Sign Out
    //       </button>
    //     ) : (
    //       <Link to="/signup">Sign Up</Link>
    //     )}
    //   </div>
    //   <div className="w-1/5 flex justify-center items-center gap-5">
    //     <Link to="/volunteer">
    //       <Button variant="default" className="max-w-sm">
    //         Volunteer
    //       </Button>
    //     </Link>
    //     <Link to="/donate">
    //       <Button variant="default" className="max-w-sm">
    //         Donate Now
    //       </Button>
    //     </Link>
    //   </div>
    // </div>

    <div className="p-4 border-b flex justify-between sticky top-0 bg-white w-full drop-shadow-sm">
      <div className="w-1/5 flex justify-center items-center">
        <h2 className="font-bold text-primary text-2xl">
          <Link to="/">
            Bhumi<span className="text-black">.ngo</span>
          </Link>
        </h2>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/aboutus">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/campaigns">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Campaigns
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/blogs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-x-4 ">
        <div className="flex gap-x-4">
          <Link to="/volunteer">
            <Button
              variant="outline"
              className="max-w-sm border-primary border-2 hover:bg-primary hover:text-white"
            >
              Volunteer
            </Button>
          </Link>
          <Link to="/donate">
            <Button
              variant="outline"
              className="max-w-sm border-primary border-2 rounded-lg hover:bg-primary hover:text-white"
            >
              Donate Now
            </Button>
          </Link>
        </div>
        {cook ? (
          <Button
            type="submit"
            className="rounded-lg"
            onClick={() => signOutHandler()}
          >
            Sign Out
          </Button>
        ) : (
          <Button className="rounded-lg">
            <Link to="/signup">Sign Up</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
