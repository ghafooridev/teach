import React from "react"

import PropTypes from "prop-types"

import clsx from "clsx"

import {styles} from "./Button.Style"
import {Typography} from "@material-ui/core";

const Button = function (props) {
  const {
    className,
    label
  } = props

  const classes = styles(props)

  return (
    <button
      className={clsx(classes.root, className)}
    >
      <Typography variant={"h6"}>
        {label}
      </Typography>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {
  type: "dark",
}

export default Button
