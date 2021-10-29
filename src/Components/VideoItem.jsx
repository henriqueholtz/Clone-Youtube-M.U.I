import React from 'react';
import { Box, Typography } from "@material-ui/core";

export default function VideoItem({video}) {
    return (
        <Box>
            <img src={video.thumb} alt={video.title} style={{width: '100%'}}/>
            <Box>
                <Typography 
                    style={{fontWeight: 600}}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                >
                    {video.title}
                </Typography>
                
                <Typography 
                    display="block"
                    variant="body2"
                    color="textSecondary"
                >
                    {video.channel}
                </Typography>

                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    {`${video.views} - ${video.date}`}
                </Typography>
            </Box>
        </Box>
    )
}