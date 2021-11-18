import React from 'react';
import Box from '@mui/material/Box';

export default function Home() {

    return (
        <div>
            <Box
                sx={{
                    width: 1200,
                    height: 700,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />
        </div>
    )
}