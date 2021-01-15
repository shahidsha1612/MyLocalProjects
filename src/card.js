import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './SongLi.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import songD from './MOCK_DATA.json';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { AppBar, DialogContent } from '@material-ui/core';
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
function OutlinedCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [playlistName, setPlaylistName] = useState("");
    const dispatch = useDispatch();
    const playlistObj = props.playlist;
    const PlayListNamesToAdd = playlistObj.map(function (obj) {
        return obj.name;
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (evt) => {
        setOpen(true);

    };

    const handleDialogClose = () => {
        setOpen(false);
        setPlaylistName("");
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePlaylistName = (event) => {
        setPlaylistName(event.target.value);

    };
    const handleAddToPlaylist = id => {

        console.log(id);
    }

    const classes = useStyles();


    return (

        <div className="users">
            <input className={classes.search} placeholder="search Song" onChange={(event) => {
                setSearchTerm(event.target.value);
            }}>

            </input>
            {
                songD.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    }
                    else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }



                }
                ).map((SongList, index) => (
                    <Card className={classes.root} variant="outlined" >
                        <div className="songs" key={index}>
                            <CardContent id={SongList.id}>
                                <div className="sp1"><img className="albums" src="https://www.theweeknd.com/sites/g/files/aaj5321/f/styles/suzuki_breakpoints_image_tablet_sq/public/release/201911/2ac634c217fba52b18e776e98f1d2c82889c59ed.jpg?itok=NkrCSZxp" /></div>
                                <h3 className="sp2">{SongList.name}</h3>
                                <div className="sp3">{SongList.artist}</div>
                                <div className={classes.faby} >
                                    <ThemeProvider theme={outerTheme}>
                                        <Fab aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="small" color="secondary" aria-label="add" className="fab" >
                                            <AddIcon />
                                        </Fab>
                                    </ThemeProvider>

                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >


                                        <MenuItem onClick={handleClickOpen}>Create Playlist</MenuItem>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="form-dialog-title"
                                        >
                                            <DialogContent>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Enter Playlist Name"
                                                    type="text"
                                                    onChange={handlePlaylistName}
                                                    value={playlistName}
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleDialogClose} color="primary">
                                                    Cancel
          </Button>
                                                <Button color="primary" onClick={() => {
                                                    props.addPlaylist(playlistName);
                                                    handleDialogClose()
                                                }



                                                }>
                                                    Create
          </Button>

                                            </DialogActions>
                                        </Dialog>



                                        {
                                            playlistObj ? (
                                                playlistObj.map((obj) => {
                                                    let currentPlaylistName = obj.name;
                                                    let id = SongList.id;
                                                    return <MenuItem onClick={handleAddToPlaylist(id)}>Add to {currentPlaylistName} </MenuItem>
                                                }
                                                )) : (
                                                    <p>Empty</p>
                                                )
                                        }
                                    </Menu>



                                </div>


                            </CardContent>
                        </div>

                    </Card>
                ))
            }
        </div>
    );

}
const mapDispatchToProps = dsipatch => {

    return {
        addPlaylist: playlistName => dsipatch(addPlaylist(playlistName))
    }
}
const mapStateToProps = state => {

    return {
        playlist: state.Playlist
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OutlinedCard);