import React from "react";
import CustomDrawer from "../../../components/Dashboard/CustomDrawer";
import ServicesTable from "../../ServicesTable";

export default function index() {
  return (
    <CustomDrawer selectedItem={"Servicii"}>
      <ServicesTable />
    </CustomDrawer>
  );
}
