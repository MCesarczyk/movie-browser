import { Icon } from "./styled";


interface NextIconProps {
    disabled: boolean;
};

const NextIcon = ({ disabled }: NextIconProps) => (
    <Icon disabled={disabled} />
);

export default NextIcon;
