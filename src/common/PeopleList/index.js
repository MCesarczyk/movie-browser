import { SectionListContainer, SectionTitle, SectionWrapper } from "./styled";

const PeopleList = ({ title, body }) => {
    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <SectionListContainer>
                {body}
            </SectionListContainer>
        </SectionWrapper>
    )
};

export default PeopleList;