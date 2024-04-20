import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const PlaylistCard = ({
    playlistDetail: { 
        id: { playlistId },
        snippet: { channelId, channelTitle, title, thumbnails } }
}) => {

    return (
        <Card sx={{
            width: { sm: "302px", xs: "345px" },
            boxShadow: "none",
            borderRadius: 0,
        }}>
            <Link to={`/playlist/${playlistId}`}>
                <CardMedia
                    image={thumbnails?.high.url}
                    alt={title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor: "#1e1e1e",
                    height: "106px"
                }}
            >
                <Link to={`/playlist/${playlistId}`}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#fff"
                    >
                        {title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={`/channel/${channelId}`}>
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="gray"
                    >
                        {channelTitle} ‧ Playlist
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default PlaylistCard;
