import { ReactNode } from "react";

import { Wrapper } from "common/Wrapper";
import { Header } from "common/Header";
import { SectionInnerContainer } from "./styled";


interface SectionProps {
    title: string;
    itemsList: ReactNode[] | null;
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