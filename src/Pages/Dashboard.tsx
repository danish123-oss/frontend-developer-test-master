import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../Components/sidebar";
import Content from "../Components/content";
function Dashboard() {
  return (
    <React.Fragment>
      <Grid className="bg-black max-height-grid" container spacing={2}>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
          <Content />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dashboard;
