import styled from "styled-components";

const mediumScreen = ({ theme }) => theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }) => theme.breakpoint.smallScreen;
const mobileMax = ({ theme }) => theme.breakpoint.mobileMax;
const oldIphone = ({ theme }) => theme.breakpoint.oldIphone;

export const SectionWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
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

export const SectionListContainer = styled.div`
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