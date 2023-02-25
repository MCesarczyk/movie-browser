import { ReactNode } from "react";

import { Wrapper } from "common/Wrapper";
import { Header } from "common/Header";
import { SectionInnerContainer } from "./styled";
import { LoadingBar } from "common/LoadingBar";


interface SectionProps {
    title: string;
    itemsList: ReactNode[] | null;
    isFetching?: boolean;
};

const Section = ({ title, itemsList, isFetching }: SectionProps) => {
    return (
        <Wrapper>
            {isFetching && <LoadingBar />}
            <Header>{title}</Header>
            <SectionInnerContainer>
                {itemsList}
            </SectionInnerContainer>
        </Wrapper>
    )
};

export default Section;
