import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './'

const VideoDetail = () => {

  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {

    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetail(data?.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setVideos(data.items));

  }, [id])

  if(!videoDetail?.snippet) {
    return "Loading..."
  }

  const { snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box minHeight="95vh"
      mx= {{ xs: "20px", lg: "100px" }}
    >
      <Stack
        direction={{xs: "column", md: "row"}}
      >
        <Box flex={1} py={2}>
          <Box sx={{
            width: "100%",
            position: "sticky",
            top: "86px"
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
            />
            <Typography 
              variant="h5"
              pt={2}
              color="#fff"
              fontWeight="bold">
              {title}
            </Typography>
            <Stack 
              my={1}
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Link to={`/channel/${channelId}`}>
                <Typography 
                  color="#fff"
                  fontSize={{ xs: "18px", md: "20px"}}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack 
                direction="row"
                gap={2}
                alignItems="center"
              >
                <Typography
                  color="#fff"
                  fontSize={{ xs: "12px", md: "1rem"}}
                  variant="body1"
                  sx={{
                    opacity: "0.7"
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  color="#fff" 
                  fontSize={{ xs: "12px", md: "1rem"}}
                  variant="body1"
                  sx={{
                    opacity: "0.7"
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={{xs: 0, md: 2}}
          py={{md: 1.5, xs: 5}}
          justifyContent="center"
          alignItems="center">
          <Videos videos={videos} justifyContent="center" direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail