import React from "react"

import {Grid, Typography} from "@material-ui/core"

import {styles} from "./Header.Style"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Header = function () {
  const classes = styles()

  return (
    <Grid item md={12} className={classes.root}>
      <Grid className={classes.leftSide}>
        <Grid item md={6}>
          <CallIcon/>
          <Typography varient="body2" color="textSecondary">+43 665 65400328</Typography>
        </Grid>
        <Grid item md={6}>
          <MailOutlineIcon/>
          <Typography varient="body2" color="textSecondary">info@teacholearn.com</Typography>
        </Grid>
      </Grid>
      <Grid item md={6} className={classes.rightSide}>
        <FacebookIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
      </Grid>
    </Grid>
  )
}

export default Header
