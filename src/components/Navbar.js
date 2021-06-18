import React from 'react';
import {
    AppBar, 
    Toolbar,
    Typography,
    Button,
    Box
} from '@material-ui/core';

const Navbar = () => {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#e74c3c' }}>
                <Toolbar>
                    <Typography variant="h6">
                        Company Name
                    </Typography>
                    <Box flexGrow={1} textAlign="right">
                        <Button color="inherit" href="/">Home</Button>
                        <Button color="inherit" href="/login">Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;