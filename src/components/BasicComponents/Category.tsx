import React, { FC } from "react";

type CategoryProps = {
  title: string;
  percent: number;
  startAmount: string;
  endAmount: string;
  img?: string;
};

export const Category: FC<CategoryProps> = ({
  title,
  percent,
  endAmount,
  startAmount,
  img,
}) => {
  return (
    <div className="flex items-center gap-8 p-2 rounded-sm w-full justify-between cursor-pointer hover:bg-[#7074800e]">
      <div className="flex items-center gap-8">
        <img src={img} alt="" />
        <aside className="flex h-full flex-col justify-between gap-2 text-sm">
          <h4 className="font-bold">{title}</h4>
          <p className="text-xs text-[#707480]">{percent}%</p>
        </aside>
      </div>
      <small className="text-sm font-semibold">
        <span>₦{startAmount}</span>
        <span>/₦{endAmount}</span>
      </small>
    </div>
  );
};
