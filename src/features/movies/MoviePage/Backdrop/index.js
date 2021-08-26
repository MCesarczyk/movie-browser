import { BackdropPoster, WrapperBackdrop, Title, WrapperContent } from "./styled";


const Backdrop = () => {

    return (
    <BackdropPoster>
         <WrapperBackdrop >
             <WrapperContent>
                <Title>tytuł</Title>
            </WrapperContent>
         </WrapperBackdrop>
  </BackdropPoster>
    );
};

export default Backdrop;