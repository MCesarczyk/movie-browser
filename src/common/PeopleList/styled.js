import styled from "styled-components";

const mediumScreen = ({ theme }) => theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }) => theme.breakpoint.smallScreen;
const mobileMax = ({ theme }) => theme.breakpoint.mobileMax;
const oldIphone = ({ theme }) => theme.breakpoint.oldIphone;

export const SectionWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 64px;

    @media (max-width: ${mediumScreen}) {
        font-size: 30px;
        margin-top: 50px;
    }

    @media (max-width: ${mobileMax}) {
        font: 24px;
        margin-top: 36px;
    }

    @media (max-width: ${oldIphone}) {
        font-size: 18px;
        margin-top: 24px;
    }
`;

const maxWidth = ({ theme }) => theme.dimension.maxWidth;

export const SectionMiddleContainer = styled.div`
    width: ${maxWidth};
    margin: 0 auto;

    @media (max-width: ${mediumScreen}) {
        width: 1012px;
    }

    @media (max-width: ${smallScreen}) {
        width: 800px;
    }

    @media (max-width: ${mobileMax}) {
        width: 520px;
    }

    @media (max-width: ${oldIphone}) {
        width:320px;
    }
`;

export const SectionListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
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