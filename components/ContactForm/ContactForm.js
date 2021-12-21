import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    marginTop: 15,
    fontSize: 23,
    color: "#00BD56",
    textAlign: "center",
  },
  textInput: {
    textDecoration: "none",
    color: "#59595b",
    marginBottom: "1rem",
  },
  multiLine: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  divMargin: {
    marginTop: 20,
    height: 30,
  },
}));

const ContactForm = (props) => {
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
        wrap="wrap"
      >
        <Grid item xs={2}>
          <Typography align="left">Nombre</Typography>
          <TextField
            id="standard-full-width"
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography align="left">Apellido</Typography>
          <TextField
            id="standard-full-width"
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography align="left">Correo electronico</Typography>
          <TextField
            id="standard-full-width"
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <div className={classes.divMargin}></div>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xs={6}>
            <Typography align="left">Mensaje</Typography>
            <TextField
              id="outlined-full-width"
              style={{ margin: 4 }}
              placeholder="Placeholder"
              multiline
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;
