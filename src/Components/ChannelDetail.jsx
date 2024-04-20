import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box sx={{ textAlign: "center"}}>
        <img src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          style={{ objectFit: "cover", height: "300px", width: "80%", zIndex: 10}}
        />
        <ChannelCard 
          channelDetail={channelDetail}
          marginTop="-93px"
        />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "start", margin: "-15px 20px 10px" }}>
          <Typography sx={{ color: "#fff", fontSize: "14px", maxWidth: "800px" }}>
            {channelDetail?.snippet?.description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Videos videos={videos} justifyContent="center"/>
      </Box>
    </Box>
  )
};

export default ChannelDetail;
