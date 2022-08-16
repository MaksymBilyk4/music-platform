import React, {useState} from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "../../hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState(serverTrack);
    const router = useRouter();
    const username = useInput("");
    const text = useInput("");

    const addComment = async () => {
        try {
            const response = await axios.post("http://localhost:5000/tracks/comment", {
                username: username.value,
                text: text.value,
                trackId: track._id
            });
            setTrack({...track, comments: [...track.comments, response.data]});
        }catch (e) {
            console.log(e)
        }
    }

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
                <img src={"http://localhost:5000/" + track.picture} alt={track._id} width={200} height={200}/>
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
                    {...username}
                />
                <TextField
                    label="Комментарий"
                    fullWidth
                    {...text}
                    multiline
                    row={4}
                />
                <Button onClick={addComment}>Отправить</Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get("http://localhost:5000/tracks/" + params.id);
    return {
        props: {
            serverTrack: response.data,
        }
    }
}