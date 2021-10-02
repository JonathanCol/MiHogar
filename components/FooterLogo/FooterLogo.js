import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    margin: 30,
    flexGrow: 1,
  },
  center: {
    alignContent: "center",
  },
}));

const FootSis = (props) => {
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
        <Link href="/">
          <Image src="/images/home.png" width={200} height={200} />
        </Link>
      </Grid>
    </div>
  );
};

export default FootSis;
