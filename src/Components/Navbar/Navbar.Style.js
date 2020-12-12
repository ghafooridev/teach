import {makeStyles} from "@material-ui/core/styles"

export const styles = makeStyles((theme) => ({
  root: {
    bottom: "auto",
    top: 0,
    backgroundColor: theme.palette.blue.lighter,
    position: "sticky",
    zIndex: 1000,
    width: "100%",
    "& .rootMenu": {
      display: "flex",
      listStyleType: "none",
      flexDirection: "row",
      padding: "0 10px",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        width: "100%"
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        "& h6": {
          display: "flex",
          alignItems: "center"
        }
      }
    },
    "& .sideMenu": {
      display: "flex",
      listStyleType: "none",
      flexDirection: "row",
      paddingInlineStart: 20,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "center"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        justifyContent: "space-between"
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        "& h6": {
          display: "flex",
          alignItems: "center"
        }
      }
    }
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "block",
    },
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 20
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20
  },
  buttonGroupCollapse: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  buttonGroupToggle: {
    display: "flex",
    alignItems: "center",
  },
  buttonGroupExpand: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
      flexDirection: "column-reverse",
    },
  },
  hamburger: {
    display: "none",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: 0,
      height: 45,
    },
  },

  menuOption: {
    cursor: "pointer",
    backgroundColor: theme.palette.blue.lighter,
    color: theme.palette.blue.dark,
    letterSpacing: 1,
    margin: "0 5px",
    padding: 5,
    borderRadius: 5,
    "& img": {
      margin: "0 5px"
    },
    "&:hover": {
      border: `${theme.palette.blue.light} 1px solid`,
      color: theme.palette.blue.light,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "2px 0",
      justifyContent: "center"
    },
  },
  lightButton: {
    cursor: "pointer",
    color: "gold"
  },
  darkButton: {
    cursor: "pointer",
    color: theme.palette.blue.dark
  }
}))
