import Votes from "common/Votes";
import {
    BackdropPoster,
    WrapperBackdrop,
    Title,
    WrapperContent,
    BackdropContainer,
} from "./styled";


interface BackdropProps {
    sizes: string[];
    imageBaseUrl: string;
    imagePath: string;
    title: string;
    rating: number;
    votes: number;
};

export const Backdrop = ({
    sizes,
    imageBaseUrl,
    imagePath,
    title,
    rating,
    votes
}: BackdropProps) => {
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
                            backdrop={'true'}
                            votes={votes}
                            rating={rating}
                        />
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};
