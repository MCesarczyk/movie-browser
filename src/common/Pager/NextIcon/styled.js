import styled from "styled-components";
import { ReactComponent as Next } from "./images/next.svg";

export const Icon = styled(Next)`
    margin-left: 8px;
    color: ${({ theme }) => theme.color.scienceBlue};
`;
