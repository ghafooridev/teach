import {makeStyles} from "@material-ui/core/styles"

export const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    "& .img": {
      height: 400,
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        height: 300,
      }
    },
    "& .ico": {
      height: 20,
      marginRight: 10
    },
    "& button": {
      marginTop: 50
    },
    "& ul": {
      listStyleType: "none",
      padding: 0,
      marginTop: 20,
      "& li": {
        display: "flex",
        alignItems: "center",
        margin: "10px 0",
      }
    }
  },
  rightSide: {
    display: "flex",
    flexDirection: "flex-end",
    alignItems: "center",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto"
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 50px"
    }
  },
  title: {
    margin: "30px 0",
    color: theme.palette.blue.dark
  },
  body: {
    margin: "20px 0",
  }

}))
