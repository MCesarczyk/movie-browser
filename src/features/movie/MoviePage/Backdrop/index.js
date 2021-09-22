
import {
    BackdropPoster,
    WrapperBackdrop,
    Title,
    WrapperContent,
    BackdropContainer,
} from "./styled";
import Votes from "../../../../common/Votes";

const Backdrop = ({
    sizes,
    imageBaseUrl,
    imagePath,
    title,
    rating,
    votes
}) => {
    return (
        <BackdropContainer>
            <BackdropPoster
                sizes={sizes}
                baseUrl={imageBaseUrl}
                path={imagePath}
            >
                <WrapperBackdrop >
                    <WrapperContent>
                        <Title>{title}</Title>
                        <Votes
                            backdrop
                            votes={votes}
                            rating={rating}
                        />
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export default Backdrop;