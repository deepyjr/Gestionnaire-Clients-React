import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden"; 
// });
const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column ',
        height:'100vh',
    },
  }));

export default function LoadingPage()
{

const classes = useStyles();
    var sentences = ['Franck est un bon formateur', 'Marc est un bon vivant', "Raphaël adore l'infographie", "William essaie de faire des loading page", "Sion habite trop loin"]

return (
    <>

        <Container className={classes.container} maxWidth="lg">
                <CircularProgress size="15rem" className={classes.CircularProgress} />
                <h1 id="title">{sentences[Math.floor(Math.random() * sentences.length)]}</h1>
        </Container>
    
    
    </>
)
}