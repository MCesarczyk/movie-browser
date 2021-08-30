import { SectionContainer, SectionTitle } from "./styled";

const Section = ({ title, body }) => {
    return (
        <section>
            <SectionTitle>{title}</SectionTitle>
            <SectionContainer>
                {body}
            </SectionContainer>
        </section>
    )
};

export default Section;