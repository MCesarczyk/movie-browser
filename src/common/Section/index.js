import { SectionListContainer, SectionMiddleContainer, SectionTitle, SectionWrapper } from "./styled";

const Section = ({ title, body }) => {
    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <SectionMiddleContainer>
                <SectionListContainer>
                    {body}
                </SectionListContainer>
            </SectionMiddleContainer>
        </SectionWrapper>
    )
};

export default Section;