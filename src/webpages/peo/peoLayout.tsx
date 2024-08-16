import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function peoLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default peoLayout