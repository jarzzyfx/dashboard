import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Budget } from "./pages/Budget";
import { LastMonth, Navigation, ThisMonth } from "./components";

function Layout() {
  return (
    <div className="w-full h-screen relative md:pl-32 pt-10 pr-10 bg-[#FCFCFC]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />}>
          <Route path="/budget/last-month" element={<LastMonth />} />
          <Route path="/budget/this-month" element={<ThisMonth />} />
        </Route>
      </Routes>
      <Navigation />
    </div>
  );
}

export default Layout;
