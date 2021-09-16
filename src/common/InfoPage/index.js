import { Wrapper } from "../Wrapper";
import { Header } from "../Header";

const InfoPage = ({ title, extraContent }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            {extraContent}
        </Wrapper>
    );
};

export default InfoPage;
