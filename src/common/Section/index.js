import { SectionListContainer, SectionTitle, SectionWrapper } from "./styled";

const Section = ({ title, body }) => {
    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <SectionListContainer>
                {body}
            </SectionListContainer>
        </SectionWrapper>
    )
};

export default Section;