import React from "react";
import Tile from "../../../common/Tile"
import Wrapper from "../../../common/Wrapper";
import Backdrop from "./Backdrop";

const MoviePage = () => {

    return (
        <Container>
        <Backdrop />
            <div>Movie Page</div>
            <Wrapper>
                <Tile />
            </Wrapper>
        </Container>
        
    );
};

export default MoviePage;