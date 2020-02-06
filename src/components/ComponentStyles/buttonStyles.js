import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {grey, lightBlue} from "@material-ui/core/colors";


const buttonStyles = makeStyles({
    buttonBlue: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 30,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 20,
        width: '100%',
    },
    input: {
        margin: 3,
        width: '100%',
    },
});

const navStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        buttonBlue: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 30,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            marginTop: 20,
            width: '60%',
        },
        nav: {
          background: '#039be5',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            position: 'center',
            width: '100vh',
            height: '25vh',
        },
        iconButton: {
            color: grey[400],
            fontSize: 50,
            marginRight: '25px',
            marginTop: '20px',
        },
        buttontags: {
          fontSize: '50px'
        },
        card: {
            width: '24vw',
            height: '32vh',
            marginLeft: '0.4vw',
            marginRight:'0.4vw',
            marginTop: '20px',
        },
        cardmedia: {
            width: '100%',
            height: '50%',
            background: 'cover',
        },
        cardactions: {
            margin: '0',
            padding: '0px',
        },
    }),
);

const containerStyles = makeStyles({

});

export {
    buttonStyles,
    navStyles,
    containerStyles,
}