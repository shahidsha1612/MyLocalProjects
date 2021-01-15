import React, { Component, useState } from 'react';
import AppBar from './NavBar';
import PageContent from "./PageContent";
import './App.css';
import { ThemeProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './SongLi.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme } from "@material-ui/core/styles";
import songD from './MOCK_DATA.json';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { DialogContent } from '@material-ui/core';
import { addPlaylist } from "./Redux/Actions";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '30%',
        height: '2px',
        padding: '60px',
        marginLeft: '600px',
        flexGrow: 1,
    },
    faby: {

        marginTop: '-230px',
        marginLeft: '540px',


    },
    search: {
        marginLeft: 0,
        width: '100%',
        flexGrow: 1,
        borderRadius: 'theme.shape.borderRadius',
        backgroundColor: 'theme.palette.common.white',

    },

});
const outerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: "#000000"
        }
    }
});
function Playlist(props) {



    const classes = useStyles();
    const [Toogle, setToogle] = useState(false);

    return (
        <Provider store={store}>
            <div className="App">
                <ThemeProvider>
                    <PageContent >

                        {
                            Toogle ? (
                                <h1>empty playlist</h1>
                            ) :
                                (

                                    songD.map((SongList, index) => (
                                        <Card className={classes.root} variant="outlined" >
                                            <div className="songs" key={index}>
                                                <CardContent>
                                                    <div className="sp1"><img className="albums" src="https://www.theweeknd.com/sites/g/files/aaj5321/f/styles/suzuki_breakpoints_image_tablet_sq/public/release/201911/2ac634c217fba52b18e776e98f1d2c82889c59ed.jpg?itok=NkrCSZxp" /></div>
                                                    <h3 className="sp2">{SongList.name}</h3>
                                                    <div className="sp3">{SongList.artist}</div>
                                                    <div className={classes.faby} >

                                                    </div>


                                                </CardContent>
                                            </div>

                                        </Card>
                                    ))

                                )
                        }


                    </PageContent>
                </ThemeProvider>
            </div>
        </Provider>
    )



}
export default Playlist;