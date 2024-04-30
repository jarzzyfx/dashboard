import React, { FC } from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div>
      Home
      <Link to={"/budget"}>Budget Page</Link>
    </div>
  );
};
