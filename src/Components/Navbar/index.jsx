import React, {useContext, useState} from "react"

import {Grid, Typography} from "@material-ui/core"

import {Squash as Hamburger} from "hamburger-react"

import clsx from "clsx"
import ThemeContext from "../../Contexts/Theme/ThemeContext"

import {styles} from "./Navbar.Style"
import Logo from "../../assests/img/logo.png"
import LockIcon from '@material-ui/icons/Lock';
import EN from '../../assests/img/EN.png';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const NavBar = function () {
  const {toggleTheme, theme} = useContext(ThemeContext)
  const mode = theme.Theme.palette.type

  const [isOpen, setOpen] = useState(false)

  const classes = styles(isOpen)

  const onToggleHamburger = function (toggle) {
    setOpen(toggle)
  }

  const onMenuClick = function (type) {

  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={2} className={classes.leftSide}>
          <img
            alt="logo"
            src={Logo}
            className={classes.logo}
            onClick={() => onMenuClick("home")}
          />
        </Grid>
        <Grid item xs={12} md={7} className={classes.menu}>
          <Grid item className={classes.hamburger}>
            <Hamburger
              size={20}
              color="#aaa"
              toggled={isOpen}
              toggle={setOpen}
              onToggle={(toggled) => onToggleHamburger(toggled)}
            />
          </Grid>
          <Grid
            item
            className={clsx(
              classes.buttonGroupToggle,
              isOpen ? classes.buttonGroupCollapse : classes.buttonGroupExpand
            )}
          >
            <ul className="rootMenu">
              <li>
                <Typography variant="h6" className={classes.menuOption}>
                  Home
                </Typography>
              </li>
              <li>
                <Typography variant="h6" className={classes.menuOption}>
                  About Us
                </Typography>
              </li>
              <li>
                <Typography variant="h6" className={classes.menuOption}>
                  Start Teaching
                </Typography>
              </li>
              <li>
                <Typography variant="h6" className={classes.menuOption}>
                  Start Learning
                </Typography>
              </li>
              <li>
                <Typography variant="h6" className={classes.menuOption}>
                  Contact
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} className={classes.rightSide}>
          <ul className="sideMenu">
            <li>
              <Typography variant="h6" className={classes.menuOption}>
                <LockIcon/>
                Login
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.menuOption}>
                SignUp
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.menuOption}>
                EN
                <img src={EN} alt="language"/>
              </Typography>
            </li>
            <li>
              {
                mode === "dark" ? (
                  <Brightness7Icon
                    onClick={toggleTheme}
                    className={classes.lightButton}/>
                ) : (
                  <Brightness3Icon
                    onClick={toggleTheme}
                    className={classes.darkButton}/>
                )
              }
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default NavBar
