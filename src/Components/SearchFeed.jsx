import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';           
import SearchIcon from "@mui/icons-material/Search"

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data => { setVideos(data.items) });
   
  }, [searchTerm])

  return (
      <Box sx={{
        p: 2,
        overflowY: "auto",
        height: "92vh",
        }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ 
            color: "#fff",
          }}>
          <span style={{ color: "#fff", backgroundColor: "red", padding: "0 8px", marginRight: "10px", borderRadius: "25%"}}><SearchIcon /></span>
          Search Results for: <span style={{color: "#F31503"}}>{searchTerm}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed