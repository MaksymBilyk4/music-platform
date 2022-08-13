import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";

interface MainLayoutProps {
    children: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: "90px auto"}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;