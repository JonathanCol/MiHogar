import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: "50px 60px 0 60px",
  },
  divText: {},
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.margin}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                Nosotros
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h4"
              >
                Somos una casa de desarrollo de software
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                Contacto
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h4"
              >
                Somos una casa de desarrollo de software
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardContent>
              <div>
                <Typography variant="h4" component="h2">
                  Login
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  variant="h4"
                >
                  Login
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
