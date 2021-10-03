import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { ImageRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 15,
    objectFit: "cover",
    alignContent: "center",
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35),
  },
  divGrid: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  divCenter: {
    textAlign: "center",
  },
  border: {
    borderRadius: "5px",
  },
}));

const AvatarCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.divGrid}>
        <Grid
          container
          spacing={1}
          direction="row"
          wrap="wrap"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={12} sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>

              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial">
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial">
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial">
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial">
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default AvatarCard;
