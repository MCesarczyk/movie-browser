import styled from "styled-components";

const Wrapper = styled.div`
    max-width: ${({ theme }) => theme.dimension.maxWidth};
    margin: 0 auto;
`;

export default Wrapper;