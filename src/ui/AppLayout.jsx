import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const isLoading = useNavigation().state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll ">
      <main className=" max-w-3xl mx-auto">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
};
export default AppLayout;
