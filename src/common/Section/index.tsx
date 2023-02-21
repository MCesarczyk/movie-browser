import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { SectionInnerContainer } from "./styled";

interface SectionProps {
    title: string;
    itemsList: string[];
};

const Section = ({ title, itemsList }: SectionProps) => {
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