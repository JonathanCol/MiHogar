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
  div: {
    width: "100%",
    backgroundColor: "#a5d6a7",
  },
  margin: {
    margin: "50px 60px 0 60px",
  },
  media: {
    height: 140,
  },
  divButton: {
    flexGrow: 2,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <div className={classes.margin}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className={classes.divButton}>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </div>
                <div className={classes.divButton}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className={classes.divButton}>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </div>
                <div className={classes.divButton}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className={classes.divButton}>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </div>
                <div className={classes.divButton}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
