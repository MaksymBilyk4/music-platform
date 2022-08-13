import React from 'react';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import styles from "../styles/Player.module.scss";
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";

const Player: React.FC = () => {
    const active = false;
    const track: ITrack = {
        _id: "1",
        name: "Track 1",
        artist: "Artist 1",
        text: "Text text tex",
        listens: 5,
        picture: "http://localhost:5000/image/0710ee95-68b0-4de3-b7d5-28876f1aefaa.jpg",
        audio: "http:localhost:5000/audio/f764205b-d18a-418b-95b7-bba96121c999.mp3",
        comments: []
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: "0 20px"}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: "gray"}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    );
};

export default Player;