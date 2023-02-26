import { ReactNode } from "react";
import styled from "styled-components";

import { Wrapper } from "common/Wrapper";
import { Header } from "common/Header";


interface SectionProps {
    title: string;
    itemsList: ReactNode[] | null;
    isObsolete?: boolean;
};

const Section = ({ title, itemsList, isObsolete }: SectionProps) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <SectionInnerContainer isObsolete={!!isObsolete}>
                {itemsList}
            </SectionInnerContainer>
        </Wrapper>
    );
};

export default Section;

const SectionInnerContainer = styled.div<{ isObsolete: boolean }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    filter: ${({ isObsolete }) => isObsolete ? 'brightness(0.9)' : 'none'};
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        gap: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        gap: 16px;
    }
`;
