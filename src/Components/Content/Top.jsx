import React from "react"

import {Grid, Typography} from "@material-ui/core"

import {styles} from "./Content.Style"

import Image from "../../assests/img/top.png"


const Top = function () {
  const classes = styles()

  return (
    <Grid container className={classes.row}>
      <img
        className="img"
        alt="image"
        src={Image}
      />
      <Grid item md={6} xs={12} className={classes.text}>
        <Typography variant="h3" className={classes.title}>
          What We Have Done
        </Typography>
        <Typography variant="subtitle1" className={classes.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Top
