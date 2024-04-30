import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavlinksProps {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const Navlinks: FC<NavlinksProps> = ({ name, icon, url }) => {
  return (
    <NavLink
      className=" group flex gap-1 relative flex-col items-center md:flex-row md:p-2 rounded-md md:hover:bg-blue-200"
      to={url}
    >
      {icon && icon}
      <h3 className="text-sm group-aria-[current=page]:text-[#001233] text-[#C1C4CD] md:absolute md:translate-x-12 md:p-2 md:shadow-md md:bg-white md:rounded-md md:hidden md:group-hover:flex">
        {name}
      </h3>
    </NavLink>
  );
};
