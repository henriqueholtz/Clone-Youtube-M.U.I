import React from 'react';
import data from '../Data/videos.js'
import VideoItem from './VideoItem'

import {Toolbar, Box, Typography, Grid } from "@material-ui/core";

export default function Wrapper() {
    return (
        <Box p={4}>
            <Toolbar />
            <Typography 
                variante="h5"
                color="textPrimary"
                style={{ fontWeight: 800/*, margin: '34px 0 5px 220px'*/}}
            >
                Recommended
            </Typography>
            <Grid container spacing={2}>
                {data.map((item, index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                        <VideoItem video={item}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}