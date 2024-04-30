import { FC } from "react";

interface LastMonthProps {}

export const LastMonth: FC<LastMonthProps> = () => {
  const Max = 26;

  return (
    <div className="flex flex-col items-center md:justify-center md:items-start">
      <div className="relative w-[150px] h-[150px]">
        <img
          src="/assets/svgs/chartui.svg"
          className="animate-spin w-full h-full"
          alt="chartui"
        />
        <h1 className="text-3xl font-bold text-[#0466C8] absolute top-10 left-10 translate-x-[30%] translate-y-[50%]">
          {Max}%
        </h1>
      </div>

      <aside className="mt-4 text-center">
        <small className="text-[#707480] ml-auto">Amount spent so far</small>
        <p className="text-[#0466C8] font-bold mt-3">
          <span>₦30,000</span>
          <span className="opacity-75">/₦120,000</span>
        </p>
      </aside>
    </div>
  );
};
