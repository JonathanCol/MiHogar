import { Box, makeStyles, Grid, Button } from "@material-ui/core";
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
        direction="column"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Nombre"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Apellido"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Cedula o NIT"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Correo"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Telefono"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Dirección"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-full-width"
              placeholder="Contraseña"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained" color ="success" >Registrarse</Button>
          </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;
