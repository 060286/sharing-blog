import React from "react";
import Header from "../../components/core/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className=" bg-gray-900 p-10">
      <Header />
      <Outlet />
    </div>
  );
}
