import React from "react";
import Box from "@mui/material/Box";
import ProfileWidget from "./ProfileWidget";
import SubscribeWidget from "./SubscribeWidget";
import PostWidget from "./PostWidget";
import CommentWidget from "./CommentWidget";
import ListWidget from "./ListWidget";
import GalleryWidget from "./GalleryWidget";

function Sidebar() {
  return (
    <div>
      <SubscribeWidget />
      <Box py={3} />
      <PostWidget />
      <Box py={3} />
    </div>
  );
}

export default Sidebar;
