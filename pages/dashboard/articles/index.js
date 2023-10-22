import React, { useState, useEffect } from "react";
import CustomDrawer from "../../../components/Dashboard/CustomDrawer";
import ProcessTable from "../../ProcessTable";

export default function index() {
  return (
    <CustomDrawer selectedItem={"Articole"}>
      <ProcessTable />
    </CustomDrawer>
  );
}
