import { Box, makeStyles, Grid, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    marginTop: 20,
    height: 50,
    color: "#00BD56",
    textAlign: "center",
  },
}));

const divMargin = (props) => {
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
        <div className={classes.root}></div>
      </Grid>
      
    </div>
  );
};

export default divMargin;
