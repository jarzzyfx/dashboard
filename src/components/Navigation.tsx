import React, { FC } from "react";
import { Navlinks } from "./BasicComponents/Navlinks";
import {
  BarChart2,
  BarChartHorizontal,
  Home,
  StickyNote,
  User,
} from "lucide-react";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <div className="md:w-auto md:h-full w-full min-h-[87px] p-8 fixed bottom-0 left-0 z-30 bg-white shadow-2xl shadow-black flex justify-between  md:flex-col md:p-2 md:pt-16 md:pb-16 md:transition md:ease-in-out md:delay-150">
      <Navlinks
        icon={
          <Home className="group-aria-[current=page]:stroke-[#0466C8] w-[20px] h-[20px] stroke-[#C1C4CD]" />
        }
        name="Home"
        url="/"
      />
      <Navlinks
        icon={
          <StickyNote className="group-aria-[current=page]:stroke-[#0466C8] w-[20px] h-[20px] stroke-[#C1C4CD]" />
        }
        name="Reports"
        url="/reports"
      />
      <Navlinks
        icon={
          <BarChartHorizontal className="group-aria-[current=page]:stroke-[#0466C8] w-[20px] h-[20px] stroke-[#C1C4CD]" />
        }
        name="Chart"
        url="/chart"
      />
      <Navlinks
        icon={
          <BarChart2 className="group-aria-[current=page]:stroke-[#0466C8] w-[20px] h-[20px] stroke-[#C1C4CD]" />
        }
        name="Budget"
        url="/budget/this-month"
      />
      <Navlinks
        icon={
          <User className="group-aria-[current=page]:stroke-[#0466C8] w-[20px] h-[20px] stroke-[#C1C4CD]" />
        }
        name="Profile"
        url="/profile"
      />
    </div>
  );
};
