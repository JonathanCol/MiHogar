import { Box, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    marginTop: 15,
    fontSize: 23,
    color: "#00BD56",
  },
}));

const GridCenter = (props) => {
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
        <div className={classes.root}>
          <Typography variant="h3" color="initial">
            {props.texto}
          </Typography>
        </div>
      </Grid>
    </div>
  );
};

export default GridCenter;
