import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));
const ButtonMed = () => {
  const buttonClasses = useStyles();
  return (
    <div className={buttonClasses.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div className={buttonClasses.paper}>
            <Button size="large" variant="text" color="default">
              Soy un boton
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={buttonClasses.paper}>
            <Button size="large" variant="text" color="default">
              Soy un boton
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={buttonClasses.paper}>
            <Button size="large" variant="text" color="default">
              Soy un boton
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonMed;
