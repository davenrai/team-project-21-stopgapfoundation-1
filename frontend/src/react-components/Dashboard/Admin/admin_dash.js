import React from "react";
import "./admin_styles.css";
import Grid from '@material-ui/core/Grid';
import Navbar from "../../Navbar";
import ListingBox from "../../Listings";
import RampInfoPage from "./RampInfoPage"

/* Primary Component for the Admin Dashboard page */
class AdminDashboard extends React.Component {
  render () {
    const rampData = {
      l_height: 10,
      r_height: 10,
      color: "#EFDA33"
    };

    return (
      <div>
        <Navbar title="Admin Dashboard" logout={this.props.logout}/>
        <div className={"content"}>
          <Grid container justify={"center"}>
            <Grid item xs >
              <NumberStat title="Total Requests" stat={120} />
            </Grid>
            <Grid item xs >
              <NumberStat title="Ready For Build" stat={60} />
            </Grid>
            <Grid item xs >
              <NumberStat title="Ready For Paint" stat={12} />
            </Grid>
            <Grid item xs >
              <NumberStat title="Ready For Delivery" stat={10} />
            </Grid>
            <Grid item xs >
              <NumberStat title="Completed Ramps" stat={2} />
            </Grid>
          </Grid>

          <ListingBox />

          <hr />

          <RampInfoPage />
        </div>
      </div>
    );
  }
}

function NumberStat(props){
  return (
    <div className={"number-stat block"}>
      <h2 className={"block-title"}>{props.title}</h2>
      <span className={"number-stat-num"}>
        {props.stat}
      </span>
    </div>
  );
}

export default AdminDashboard;
