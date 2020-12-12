import {makeStyles} from "@material-ui/core/styles"

export const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.blue.lighter,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& img": {
        width: "100%",
        marginTop: 50
      }
    }
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto"
  },
  title: {
    margin: "10px 0",
    color: theme.palette.blue.dark
  },
  subTitle: {
    margin: "50px 0",
    color: theme.palette.blue.main
  }

}))
