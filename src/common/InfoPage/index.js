import Wrapper from "../Wrapper";
import { Header } from "../Header";

const InfoPage = ({ message, extraContent }) => {
    return (
        <Wrapper>
            <Header>{message}</Header>
            {extraContent}
        </Wrapper>
    );
};

export default InfoPage;
