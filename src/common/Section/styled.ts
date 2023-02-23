import styled, { DefaultTheme } from "styled-components";

const mediumScreen = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.smallScreen;
const mobileMax = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mobileMax;
const oldIphone = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.oldIphone;

export const SectionInnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    @media (max-width: ${mediumScreen}) {
        gap: 22px;
    }

    @media (max-width: ${smallScreen}) {
        gap: 20px;
    }

    @media (max-width: ${mobileMax}) {
        gap: 18px;
    }

    @media (max-width: ${oldIphone}) {
        gap: 16px;
    }
`;