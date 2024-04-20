import React from "react";
import { CardContent, CardMedia, Typography, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {

    return (
        <Box sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "345px", sm: "302px" },
            height: "326px",
            margin: "auto",
            marginTop: marginTop
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff"
                }}>
                    <CardMedia
                        image={
                            channelDetail?.snippet?.thumbnails?.high?.url ||
                            demoProfilePicture
                        }
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            height: "180px",
                            width: "180px",
                            borderRadius: "50%",
                            mb: 2,
                            border: "1px solid #e3e3e3",
                        }}
                    />
                    <Typography>
                        { channelDetail?.snippet?.title }
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
                    </Typography>
                    { channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers ‧&nbsp;
                            {parseInt(channelDetail?.statistics?.videoCount).toLocaleString()} videos
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
