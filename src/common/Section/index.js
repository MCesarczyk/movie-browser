import { SectionContainer, SectionTitle, SectionWrapper } from "./styled";

const Section = ({ title, body }) => {
    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <SectionContainer>
                {body}
            </SectionContainer>
        </SectionWrapper>
    )
};

export default Section;