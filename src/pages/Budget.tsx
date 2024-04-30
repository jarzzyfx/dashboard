import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Category } from "../components";
import { Ellipsis } from "lucide-react";

interface BudgetProps {}

export const Budget: FC<BudgetProps> = () => {
  const getPositionRight = (e?: any) => {
    const status: any | null = document.getElementById("status");
    const targetWidth = e.target.clientWidth;

    if (status) {
      status.style.width = `${targetWidth}px`;
      status.style.transform = `translateX(100px)`;
    }
  };
  const getPositionLeft = (e?: any) => {
    const status: any | null = document.getElementById("status");
    const targetWidth = e.target.clientWidth;

    if (status) {
      status.style.width = `${targetWidth}px`;
      status.style.transform = `translateX(0px)`;
    }
  };
  return (
    <div className="flex items-center md:items-start flex-col gap-6 pb-32 ">
      <h1 className="text-2xl text-left font-bold w-full pl-10 md:pl-0">
        Budget
      </h1>
      <header className="flex flex-col gap-2 w-[80%]">
        <aside className="flex items-center gap-2 text-[#707480] text-sm capitalize">
          <img src="/assets/svgs/group.svg" alt="" />{" "}
          <span>Monthly Budget</span>
        </aside>
        <div className="h-[51px] md:w-auto w-full md:max-w-[50%] flex items-center p-2 shadow-md rounded-lg bg-white">
          <p className="text-3xl text-[#001233] font-bold flex gap-1 items-center">
            <img
              src="/assets/images/pngegg.png"
              className="w-7 h-9"
              alt="Naira"
            />{" "}
            <span>120,000.00</span>
          </p>
        </div>
      </header>

      <section className="flex flex-col w-full gap-4 ">
        <header className="flex gap-4 md:w-[40%]  ml-10 md:ml-0 justify-self-start justify-between items-center relative">
          <div className="flex gap-4">
            <NavLink
              onClick={getPositionLeft}
              className="aria-[current=page]:text-[#0466C8] text-[#707480]"
              to={"/budget/last-month"}
            >
              Last Month
            </NavLink>
            <NavLink
              onClick={getPositionRight}
              className="aria-[current=page]:text-[#0466C8] text-[#707480]"
              to={{ pathname: "/budget/this-month" }}
            >
              This Month
            </NavLink>
          </div>
          <button className="group relative bg-none outline-none border-none p-1 hover:bg-slate-200 rounded-md">
            <Ellipsis className="stroke-[#707480]" />
            {/* overlay */}
            <div className="w-auto min-w-[200px] p-2 rounded-md shadow-lg hidden  group-hover:flex flex-col gap-2 absolute right-0 -translate-x-5">
              <button className="text-xs font-bold outline-none border-none bg-none rounded-sm hover:bg-slate-200 p-2 text-left">
                Expense Overview
              </button>
              <button className="text-xs font-bold outline-none border-none bg-none rounded-sm hover:bg-slate-200 p-2 text-left">
                Category Overview
              </button>
            </div>
          </button>

          {/* status */}
          <div
            id="status"
            className="w-[50px] h-1 rounded-sm bg-[#0466C8] absolute left-0 -bottom-1 transition ease-out"
          ></div>
        </header>
        <main className="mt-10 ">
          <Outlet />
        </main>
      </section>

      <section className="w-full mt-8 flex flex-col md:absolute md:right-10 md:top-0 md:w-[50%]">
        <h1 className="text-2xl font-bold pl-10">Category Breakdown</h1>
        <div className="mt-4 w-full bg-white p-8 flex flex-col gap-8">
          <Category
            title="Food and drink"
            percent={40}
            startAmount="20,000"
            endAmount="140,000"
            img="/assets/svgs/food.svg"
          />
          <Category
            title="Savings"
            percent={20}
            startAmount="10,000"
            endAmount="120,000"
            img="/assets/svgs/save.svg"
          />
          <Category
            title="Savings"
            percent={50}
            startAmount="100,000"
            endAmount="200,000"
            img="/assets/svgs/save.svg"
          />
          <Category
            title="Food and drink"
            percent={65}
            startAmount="175,000"
            endAmount="300,000"
            img="/assets/svgs/food.svg"
          />
          <Category
            title="Savings"
            percent={15}
            startAmount="10,000"
            endAmount="80,000"
            img="/assets/svgs/save.svg"
          />
        </div>
      </section>
    </div>
  );
};
