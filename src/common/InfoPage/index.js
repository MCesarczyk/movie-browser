import { Wrapper } from "../Wrapper";
import { Header } from "../Header";

const InfoPage = ({ title, body }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            {body}
        </Wrapper>
    );
};

export default InfoPage;