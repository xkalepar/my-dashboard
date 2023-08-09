import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const index = () => {
  return (
    <Box m={"20px"}>
      <div className="flex-between">
        <Header title={"DASHBOARD"} subtitle={"welcome to your dashboard"} />
      </div>
      ;
    </Box>
  );
};

export default index;
