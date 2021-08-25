import React from "react";
import Tile from "../../../common/Tile"
import Wrapper from "../../../common/Wrapper";
import Backdrop from "./Backdrop";

const MoviePage = () => {

    return (
        <>
        <Backdrop />
            <div>Movie Page</div>
            <Wrapper>
                <Tile />
            </Wrapper>
        </>
        
    );
};

export default MoviePage;