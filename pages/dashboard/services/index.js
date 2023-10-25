import React from "react";
import CustomDrawer from "../../../components/Dashboard/CustomDrawer";
import ServicesTable from "../../ServicesTable";

export default function index() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <CustomDrawer selectedItem={"Servicii"}>
        <ServicesTable />
      </CustomDrawer>
    </>
  );
}
