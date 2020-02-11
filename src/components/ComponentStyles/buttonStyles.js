import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {grey, red} from "@material-ui/core/colors";


const buttonStyles = makeStyles({
    buttonBlue: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 10,
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
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            marginTop: 20,
            width: '60%',
        },
        buttonRed: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            padding: '0 30px',
            marginTop: 20,
        },
        buttonBlue2: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            padding: '0 30px',
            marginTop: 20,
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
            display: 'flex',
            width: '60%',
            margin: '5px',
        },
        cardProfile: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
        },
        buttonCard: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            width: '75%',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '25%',
        },
        avatar: {
            backgroundColor: red[500],
        },
        cardDetail: {
            margin: '20px',
            width: '60%',
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