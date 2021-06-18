import React from 'react';
import {
    Container,
    CssBaseline,
    Button,
    TextField,
    Typography,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }));

const ForgetPassword = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h6" align="justify">
                Enter email id to recive password reset link on your email.
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        size="small"
                    />
                    <Box flexGrow={1} textAlign="right">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Send
                        </Button>
                    </Box>
                </form>
            </div>
        </Container>
    )
}

export default ForgetPassword;