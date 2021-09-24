import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
  },
}));

const VideosFixed = () => {
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
        <video autoPlay muted loop width="100%" height={475}>
          <source src="/images/edificio.mp4" />
        </video>
      </Grid>
    </div>
  );
};

export default VideosFixed;
