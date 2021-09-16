import { SectionInnerContainer, SectionTitle, SectionWrapper } from "./styled";

const Section = ({ title, body }) => {
    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <SectionInnerContainer>
                {body}
            </SectionInnerContainer>
        </SectionWrapper>
    )
};

export default Section;