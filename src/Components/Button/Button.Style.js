import {makeStyles} from "@material-ui/core/styles"

const rootStyle = function (props, theme) {
  const {type, icon, label, disabled} = props
  return {
    cursor: "pointer",
    backgroundColor: type === "dark"
      ? theme.palette.blue.dark
      : theme.palette.blue.lighter,
    color: type === "dark"
      ? "#fff"
      : "#000",
    border: "none",
    borderRadius: 100,
    minWidth: 120,
    height: 50,
    padding: 10,
    transition: "all 0.5s",
    letterSpacing: 1,
    fontWeight: "bold",
    outline: "none",
    "&:hover": {
      border: `${theme.palette.blue.dark} 1px solid`,
      color: theme.palette.blue.dark,
      backgroundColor: "#fff",
    },
  }
}

export const styles = makeStyles((theme) => ({
  root: (props) => rootStyle(props, theme),
}))
