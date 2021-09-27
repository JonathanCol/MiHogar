import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    margin: 30,
  },
  back: {
    backgroundColor: "#00BD56",
    textAlign: "center",
  },
  backWhite: {
    backgroundColor: "#fff",
    textAlign: "center",
  },
}));

const GridValores = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <div className={classes.back}>
            <h1>Misión</h1>
            <div>
              <p>Facilitar las tareas de administracion en cada conjunto</p>
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={classes.backWhite}>
            <h1>Visión</h1>
            <div>
              <p>Facilitar las tareas de administracion en cada conjunto</p>
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={classes.back}>
            <h1>Valores</h1>
            <div>
              <p>Facilitar las tareas de administracion en cada conjunto</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridValores;
