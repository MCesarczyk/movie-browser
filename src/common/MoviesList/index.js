import { SectionListContainer, SectionTitle, SectionWrapper } from "./styled";

const MoviesList = ({ title, body }) => {
    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <SectionListContainer>
                {body}
            </SectionListContainer>
        </SectionWrapper>
    )
};

export default MoviesList;