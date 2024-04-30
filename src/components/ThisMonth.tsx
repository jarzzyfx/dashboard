import { FC } from "react";

interface ThisMonthProps {}

export const ThisMonth: FC<ThisMonthProps> = () => {
  return (
    <div className="flex flex-col items-center md:justify-center md:items-start">
      <div className="relative w-[150px] h-[150px]">
        <img
          src="/assets/svgs/charttm.svg"
          className="animate-pulse w-full h-full"
          alt="chartui"
        />
      </div>

      <aside className="mt-4 text-center">
        <small className="text-[#707480] ml-auto">Amount spent so far</small>
        <p className="text-[#0466C8] font-bold mt-3">
          <span>₦50,000</span>
          <span className="opacity-75">/₦120,000</span>
        </p>
      </aside>
    </div>
  );
};
