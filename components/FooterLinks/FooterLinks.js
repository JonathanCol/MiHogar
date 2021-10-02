import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    margin: 40,
    flexGrow: 1,
  },
  textTypo: {
    textAlign: "center",
    textDecoration: "none",
    color: "#59595b",
    fontSize: "14px",
    margin: "1rem",
  },
}));

const FootSis = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Link href="/Nosotros">
          <a className={classes.textTypo}>Nosotros</a>
        </Link>
        <Link href="/Contacto">
          <a className={classes.textTypo}>Contacto</a>
        </Link>
        <Link href="/Login">
          <a className={classes.textTypo}>Login</a>
        </Link>
      </Grid>
    </div>
  );
};

export default FootSis;
