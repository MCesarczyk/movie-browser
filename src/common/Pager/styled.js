import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    margin: 40px auto;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.mystic};
    margin: 0px 12px;
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.woodsmoke};
`;

// export const Header = styled.header`
//     font-weight: 600;
//     font-size: 36px;
//     line-height: 1.2;
//     color: ${({ theme }) => theme.color.woodsmoke};
// `;