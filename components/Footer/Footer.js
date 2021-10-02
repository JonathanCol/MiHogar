import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Image from "next/image";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 18,
  },

  margin: {
    margin: "50px 200px 50px 200px",
  },
  back: {
    textAlign: "center",
    marginBottom: "1.6em",
  },
  marginBot: {
    marginBottom: "1.6em",
    textAlign: "center",
    color: "#23ab70",
    fontSize: 14,
    textDecoration: "none",
  },
  textDeco: {
    textDecoration: "none",
    color: "#23ab70",
  },
});

const FooterSection = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <div className={classes.back}>
              <Link href="/">
                <Image src="/images/home.png" width={100} height={100} />
              </Link>
            </div>
            <div className={classes.back}>
              <Typography variant="h6">
                Invierta en ganaderia sostenible
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.back}>
              <Typography variant="h6">Nosotros</Typography>
            </div>
            <div className={classes.marginBot}>
              <Link href="/Nosotros">
                <a className={classes.textDeco}>
                  <Typography>Nosotros</Typography>
                </a>
              </Link>
            </div>
            <div className={classes.marginBot}>
              <Link href="/Contacto">
                <a className={classes.textDeco}>
                  <Typography>Contacto</Typography>
                </a>
              </Link>
            </div>
            <div className={classes.marginBot}>
              <Link href="/Login">
                <a className={classes.textDeco}>
                  <Typography>Login</Typography>
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.back}>
              <Typography variant="h6">Legal</Typography>
            </div>
            <div className={classes.marginBot}>
              <Typography>Términos y condiciones</Typography>
            </div>
            <div className={classes.marginBot}>
              <Typography>Politica de privacidad</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FooterSection;
