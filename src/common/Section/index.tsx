import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { SectionInnerContainer } from "./styled";
import { MovieResult } from "../../types";
import { ReactNode } from "react";

interface SectionProps {
    title: string;
    itemsList: ReactNode[];
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