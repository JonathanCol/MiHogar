import { makeStyles, Grid, Typography } from "@material-ui/core";

import Image from "next/image";

const useStyles = makeStyles((theme, props) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    marginTop: 30,
    paddingTop: 40,
    paddingBottom: 40,
    padding: 10,
  },
  back: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginTop: 15,
  },
  pad: {
    padding: 10,
  },
}));

const GridCaract = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.pad}>
        <Grid
          container
          spacing={2}
          direction="row"
          wrap="wrap"
          alignContent="space-between"
        >
          <Grid item xs sm={12} md={2}>
            <div>
              <div className={classes.back}>
                <Image src="/images/home.png" width={150} height={150} />
              </div>
              <div className={classes.back}>
                <Typography variant="h4" color="initial">
                  Verificar
                </Typography>
              </div>

              <div className={classes.back}>
                <Typography variant="subtitle1" color="initial">
                  Sosty Identifica y verifica ganaderos sostenibles
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <div className={classes.back}>
                <Image src="/images/home.png" width={150} height={150} />
              </div>
              <div className={classes.back}>
                <Typography variant="h4" color="initial">
                  Aprobar
                </Typography>
              </div>

              <div className={classes.back}>
                <Typography variant="subtitle1" color="initial">
                  Encuentra y analiza proyectos de ganadería sostenible.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <div className={classes.back}>
                <Image src="/images/home.png" width={150} height={150} />
              </div>
              <div className={classes.back}>
                <Typography variant="h4" color="initial">
                  Participar
                </Typography>
              </div>

              <div className={classes.back}>
                <Typography variant="subtitle1" color="initial">
                  Decide cuántos kg deseas participar en cada proyecto.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <div className={classes.back}>
                <Image src="/images/home.png" width={150} height={150} />
              </div>
              <div className={classes.back}>
                <Typography variant="h4" color="initial">
                  Monitorear
                </Typography>
              </div>

              <div className={classes.back}>
                <Typography variant="subtitle1" color="initial">
                  Realiza seguimiento a tu inversión a través de Sosty.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md>
            <div>
              <div className={classes.back}>
                <Image src="/images/home.png" width={150} height={150} />
              </div>
              <div className={classes.back}>
                <Typography variant="h4" color="initial">
                  Liquidar
                </Typography>
              </div>

              <div className={classes.back}>
                <Typography variant="subtitle1" color="initial">
                  Recibe tu inversión inicial y ganancias cuando se liquide el
                  proyecto.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GridCaract;
