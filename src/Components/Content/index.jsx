import React from "react"

import {Grid} from "@material-ui/core"

import {styles} from "./Content.Style"
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const Content = function () {
  const classes = styles()

  return (
    <Grid item md={8} xs={12} className={classes.root}>
      <Top/>
      <Middle/>
      <Bottom/>
    </Grid>
  )
}

export default Content
