import React, { Component, useState, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { Switch, withStyles } from '@material-ui/core';
import { ThemeContext } from "./contexts/ThemeContext";
import styles from "./styles/navStyle";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Playlist from './Playlist';

class NavBar extends Component {

    //needs to update playlist
    constructor(props) {
        super(props);
        this.state = { left: false };



    }
    static contextType = ThemeContext;






    render() {
        // const [state, setState] = useState(
        //     { left: false });



        const anchor = "left";

        const { isDarkMode, toogleTheme, Mode } = this.context;
        const { classes } = this.props;
        const playlistObj = this.props.playlist;

        // drawList = ["Playlist1", "Playlist2", "Playlist3"];
        // const updateList = (playlistName) => {
        //     drawList = [...drawList, playlistName];
        // };

        const list = (anchor) => (
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: anchor === "top" || anchor === "bottom"
                })}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <h3 className={classes.titlePlay}>PlayList</h3>
                <List>
                    {playlistObj.map((text, index) => (

                        <ListItem button key={text.name}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>

                            <ListItemText primary={text.name} />


                        </ListItem>

                    ))}
                </List>
                <Divider />
            </div >
        );
        const toggleDrawer = (anchor, open) => (event) => {
            if (
                event.type === "keydown" &&
                (event.key === "Tab" || event.key === "Shift")
            ) {
                return;
            }

            this.setState({ ...this.state.left, [anchor]: open });
        };
        return (

            <div className={classes.root}>

                <AppBar position="static" className={isDarkMode ? classes.root2 : classes.root} >

                    < Toolbar >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                            <MenuIcon onClick={toggleDrawer(anchor, true)} />
                            <Drawer
                                anchor={anchor}
                                open={this.state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </IconButton>
                        <Switch onChange={toogleTheme} />
                        <Typography>{Mode}</Typography>
                        <Typography variant="h6" className={classes.title}>
                            MUSIC-DEMO-PLAYER
          </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>

                </AppBar>
                <Route path='/Playlist' render={() => <Playlist />} />

            </div >

        );
    }
}
const mapStateToProps = state => {

    return {
        playlist: state.Playlist
    }
}


export default connect(mapStateToProps, null)(withStyles(styles)(NavBar));

