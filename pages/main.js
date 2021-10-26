import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "../components/Parallax/Parallax.js";
import styles from "../styles/jss/style.js"
import Header from "./header.js"

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <Parallax image="/img/nextjs_header.jpg">
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className="main-container" style={{height: 1000}}>
          <span className="main-container-curve"></span>
        </div>
      </div>
    </div>
  );
}
