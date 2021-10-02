import { Box, makeStyles, Grid } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    margin: 30,
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
        <Link href="/"></Link>
      </Grid>
    </div>
  );
};

export default GridCenter;
