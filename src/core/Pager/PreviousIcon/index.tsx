import { Icon } from "./styled";


interface PreviousIconProps {
    disabled: boolean;
};

const PreviousIcon = ({ disabled }: PreviousIconProps) => (
    <Icon disabled={disabled} />
);

export default PreviousIcon;
