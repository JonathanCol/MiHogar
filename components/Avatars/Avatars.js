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
    marginBottom: 20,
  },
  divGrid: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  divCenter: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  border: {
    borderRadius: "5px",
  },
  divNom: {
    body1: "2rem",
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
          <Grid item xs sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divNom}>
                <Typography color="initial" gutterBottom variant="h4">
                  DIANA MARTINEZ
                </Typography>
              </div>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial" gutterBottom>
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divNom}>
                <Typography color="initial" gutterBottom variant="h4">
                  DIANA MARTINEZ
                </Typography>
              </div>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial" gutterBottom>
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divNom}>
                <Typography color="initial" gutterBottom variant="h4">
                  DIANA MARTINEZ
                </Typography>
              </div>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial" gutterBottom>
                  Mi primera inversión en ganadería la realicé a través de
                  Sosty, debido a las garantías de sostenbilidad ambiental y el
                  nivel de calidad de sus proyectos
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs sm={12} md>
            <div>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
              >
                <Avatar src="/images/bonita.jpg" className={classes.large} />
              </Grid>
              <div className={classes.divNom}>
                <Typography color="initial" gutterBottom variant="h4">
                  DIANA MARTINEZ
                </Typography>
              </div>
              <div className={classes.divCenter}>
                <Typography variant="subtitle1" color="initial" gutterBottom>
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
