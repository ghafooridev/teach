import React from "react"

import {Grid, Typography} from "@material-ui/core"

import {styles} from "./Banner.Style"
import Button from "../Button";
import Image from "../../assests/img/baner.png";

const Banner = function () {
  const classes = styles()

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.leftSide}>
        <Typography variant="h2" className={classes.title}>You Can Teach Anywhere</Typography>
        <Typography variant="h2" className={classes.title}>You Can Learn Anywhere</Typography>
        <div>
          <Typography variant="h4" className={classes.subTitle}>If You Want Start Learning :</Typography>
          <Button
            type="dark"
            label="Get Started"
          />
        </div>
      </Grid>
      <Grid className={classes.rightSide}>
        <img
          alt="image"
          src={Image}
          className={classes.image}
        />
      </Grid>
    </Grid>
  )
}

export default Banner
