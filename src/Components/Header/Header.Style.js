import {makeStyles} from "@material-ui/core/styles"

export const styles = makeStyles((theme) => ({
  root: {
    margin: "5px 50px",
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      margin: 5,
      width: "100%"
    },
    "& svg": {
      fontSize: 20,
      color: theme.palette.gray.main,
      margin: "0 5px",
      cursor: "pointer",
      "& :hover": {
        color: theme.palette.blue.light
      }
    },
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "baseline"
    },
    "& div": {
      display: "flex",
      alignItems: "center",
    }
  }
}))

