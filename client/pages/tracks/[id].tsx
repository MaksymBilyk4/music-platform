import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
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

    const router = useRouter()

    return (
        <MainLayout>
            <Button
                onClick={() => router.push("/tracks")}
                variant={"outlined"}
                style={{fontSize: 23}}
            >
                К списку
            </Button>

            <Grid container style={{margin: "20px 0"}}>
                <img src={track.picture} alt={track._id} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>

            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid>
                <TextField
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    fullWidth
                    multiline
                    row={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;