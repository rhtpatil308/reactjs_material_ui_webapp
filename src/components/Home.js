import { 
    Card, 
    CardActionArea,
    Container, 
    Grid, 
    Typography,
    CardContent,
    CssBaseline,
    CardActions,
    Avatar,
    Divider,
    Paper,
    InputBase,
    IconButton
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    card: {
      maxWidth: 250,
    },
    media: {
        margin: "10px",
        width: "100px",
        height: "100px",
    },
    empdir: {
        marginTop: '30px'
    },
    input: {
        marginLeft: '10px',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginTop: '20px'
    },
    cardIcon: {
        color: '#e74c3c'
    }
  });

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="xl">
                <CssBaseline />
                    <Typography
                    variant="h6"
                    align="left"
                    color="textPrimary"
                    gutterBottom
                    >
                        Employee Directory
                    </Typography>
                    <Paper>
                        <Grid align='right' style={{ marginRight: '150px', paddingTop: '10px' }}>
                            <Paper component="div" className={classes.search}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search employee"
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                        <Typography 
                            color="textSecondary" 
                            align="justify" 
                            style={{ paddingLeft: '20px' }}
                        >
                            Found 1 matching member(s)
                        </Typography>
                    <Container className={classes.empdir}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                    {/* <CardMedia
                                        className={classes.media}
                                        image="../../assets/rohit-sharma.jpg"
                                        title="Contemplative Reptile"
                                    /> */}
                                    <Grid align='center'>
                                        <Avatar alt="Rohit Patil" src="../../assets/rohit-sharma.jpg" className={classes.media} />
                                    </Grid>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2" align='center'>
                                            Rohit Patil
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align='center'>
                                            Member of Technical Staff
                                        </Typography>
                                    </CardContent>
                                    <Divider />
                                    <CardActions>
                                        <PeopleAltIcon fontSize="small" className={classes.cardIcon} />
                                        <Typography variant="caption" display="block" gutterBottom>IT Team</Typography>
                                        <AlternateEmailIcon fontSize="small" className={classes.cardIcon} />
                                        <Typography variant="caption" display="block" gutterBottom>rohit.patil@gmail.com</Typography>
                                        <PhoneIcon fontSize="small" className={classes.cardIcon} />
                                        <Typography variant="caption" display="block" gutterBottom>+91 9898989898</Typography>
                                    </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    </Paper>
            </Container>
        </div>
    )
}

export default Home;