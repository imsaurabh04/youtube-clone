import React from 'react'
import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard, PlaylistCard } from './'

const Videos = ({ videos, justifyContent, direction }) => {

  if(!videos?.length) {
    return "Loading..."
  }

  return (
    <Stack 
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={justifyContent}
      alignItems="center"
      gap={2}
      >
      {videos.map((item, idx) => {

        if(item.snippet.resourceId?.videoId) {
          item = { 
            id: { videoId: item.snippet.resourceId.videoId},
            snippet: item.snippet
          }
        }

        return (
          <Box key={idx}>
            {item.id.playlistId && <PlaylistCard playlistDetail={item} />}
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos