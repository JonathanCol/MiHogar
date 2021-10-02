import { Box, makeStyles } from "@material-ui/core";
import Image from "next/image";

const stylesImage = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
}));

const fixedImage = () => {
  const classes = stylesImage();
  return (
    <Box width={1}>
      <Image
        src="/images/ciudad.jpg"
        layout="responsive"
        width={720}
        height={280}
        objectFit="cover"
      />
    </Box>
  );
};

export default fixedImage;
