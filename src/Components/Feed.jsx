import React, { useEffect, useState } from 'react';

import { Stack, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Sidebar, Videos } from '../Components';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import HomeIcon from '@mui/icons-material/Home';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [selectedCategoryLogo, setSelectedCategoryLogo] = useState(<HomeIcon/>);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => { setVideos(data.items) });
   
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{
        height: { sx: "auto", md: "89.5vh"},
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 }
      }}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedCategoryLogo={setSelectedCategoryLogo}
        />

        <Typography 
          className="copyright"
          variant="body2"
          sx={{
            color: "#fff",
            mt: 1.5,
            display: "flex",
            alignItems: "center"
          }}
          >
          Copyright 2024 - Made With 
          <FavoriteIcon sx={{ ml: 1, color: "#FC1503"}}/>
        </Typography>
      </Box>

      <Box sx={{ 
        p: 2,
        overflowY: "auto",
        height: "85vh",
        flex: 2
        }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ 
            color: "#fff",
          }}>
          <span style={{ color: "#fff", backgroundColor: "red", padding: "0 8px", marginRight: "10px", borderRadius: "25%"}}>{selectedCategoryLogo}</span>
          <span>{selectedCategory}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed