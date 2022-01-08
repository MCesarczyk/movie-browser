import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { SectionInnerContainer } from "./styled";

const Section = ({ title, itemsList }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <SectionInnerContainer>
                {itemsList}
            </SectionInnerContainer>
        </Wrapper>
    )
};

export default Section;