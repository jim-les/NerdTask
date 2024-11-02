import React from 'react';
import { Box, Card, Typography } from '@mui/material';
function LoginPage() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh"
            width="100vw"
        >
            <Card variant="outlined" 
            sx={{   
                p: 2,
                bgcolor: 'white',
                width: 400,
                borderRadius: 2,
                height: 600,

            }}
            >
                <img src="https://png.pngtree.com/png-clipart/20230915/original/pngtree-cartoon-nerd-person-using-computer-vector-png-image_12167190.png" 
                    alt="" 
                    width="100" 
                />
                <Typography variant="h4" align="center">Login</Typography>
            </Card>
        </Box>

    )
}

export default LoginPage