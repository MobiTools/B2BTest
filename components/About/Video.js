import React, { useState } from "react";
import Box from "@mui/material/Box";
import YouTube from "react-youtube";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import yt from "~/youtube";
import { useText } from "~/theme/common";
import MediaCard from "../Cards/MediaCard";
import useStyles from "./about-style";
import { Grid } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Video() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = (event) => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: "https://localhost:3008",
    },
  };

  return (
    <div className={classes.mainFeature}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" color={"white"}>
          A word from our chairman
          <IconButton
            onClick={handleClose}
            className={classes.closeBtn}
            size="large"
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube videoId="sf15CtXuw9M" onReady={_onReady} opts={opts} />
          )}
        </DialogContent>
      </Dialog>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sm={12} className={classes.charimanTextGrid}>
          <Box
            mb={2}
            className={classes.charimanTextGrid}
            style={{ width: "80%" }}
          >
            <h4 className={classes.charimanText} style={{ margin: 0 }}>
              A word from our chairman
            </h4>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sm={12}>
          <div className={classes.videoWrap}>
            <MediaCard
              title="Description text"
              orientation="landscape"
              type="video"
              thumb="https://source.unsplash.com/random"
              action={() => handleClickOpen()}
              duration="02:30"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Video;
