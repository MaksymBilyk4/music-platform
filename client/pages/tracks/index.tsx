import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: "1", name: "Track 1", artist: "Artist 1", text: "Text text tex", listens: 5, picture: "http://localhost:5000/image/0710ee95-68b0-4de3-b7d5-28876f1aefaa.jpg", audio: "http:localhost:5000/audio/f764205b-d18a-418b-95b7-bba96121c999.mp3", comments: []},
        {_id: "2", name: "Track 2", artist: "Artist 2", text: "Text text tex", listens: 5, picture: "http://localhost:5000/image/0710ee95-68b0-4de3-b7d5-28876f1aefaa.jpg", audio: "http:localhost:5000/audio/f764205b-d18a-418b-95b7-bba96121c999.mp3", comments: []},
        {_id: "3", name: "Track 3", artist: "Artist 3", text: "Text text tex", listens: 5, picture: "http://localhost:5000/image/0710ee95-68b0-4de3-b7d5-28876f1aefaa.jpg", audio: "http:localhost:5000/audio/f764205b-d18a-418b-95b7-bba96121c999.mp3", comments: []},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push("/tracks/create")}>Загрузить</Button>
                        </Grid>
                    </Box>

                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;