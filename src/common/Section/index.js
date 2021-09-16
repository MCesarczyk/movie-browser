import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { SectionInnerContainer } from "./styled";

const Section = ({ title, body }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <SectionInnerContainer>
                {body}
            </SectionInnerContainer>
        </Wrapper>
    )
};

export default Section;