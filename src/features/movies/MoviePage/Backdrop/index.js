import { BackdropPoster, WrapperBackdrop } from "./styled";
import backdrop from "./backdrop.png";

const Backdrop = () => {

    return (
        <WrapperBackdrop>
            <BackdropPoster src={backdrop} alt="" />
        </WrapperBackdrop>
    );
};

export default Backdrop;