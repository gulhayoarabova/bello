import React from 'react'
import globalclasses from "../../../index.module.scss";
import classes from "./Chart.module.scss"
import chart from "../../assets/images/chart.svg";
import arrow2 from "../../assets/images/arrow.svg";
import Header from '../../container/Header/Header';
const Chart = () => {
  return (
    <div>
        <Header/>
     <div className={classes.chart_section}>
        <div className={`${globalclasses.container} ${classes.flex}` }>
          <div className={classes.chart}>
            <img src={chart} alt="" />
            <p>
              <span>*</span>Data for illustrative purposes
            </p>
          </div>
          <div className={classes.text}>
            <p>Secure your future</p>
          <p>It’s more affordable than you think</p>
          <p>
     Life insurance shouldn’t be confusing or expensive. Bello’s term life insurance makes protecting your loved ones easy and affordable.
          </p>
          <button>
            Get my price
            <img src={arrow2} alt="" />
          </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Chart