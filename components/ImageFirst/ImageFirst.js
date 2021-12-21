import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import Image from "next/image";

const stylesImage = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    position: "relative",
    alignContent: "center",
    backgroundImage: `url("/images/ciudad.jpg")`,
    backgroundSize: "cover",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    height: 500,
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  },
}));

const fixedImage = (props) => {
  const classes = stylesImage();
  return (
    <Box width={1} className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Typography variant="h4" color="secondary">
          {props.title}
        </Typography>
      </Grid>
    </Box>
  );
};

export default fixedImage;
