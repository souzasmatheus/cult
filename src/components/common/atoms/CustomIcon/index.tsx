import { IconBaseProps } from 'react-icons';
import { IconType } from 'react-icons/lib';

type Props = IconBaseProps & {
  Icon: IconType;
};

const CustomIcon = ({ Icon, ...rest }: Props) => {
  return <Icon {...rest} />;
};

export default CustomIcon;
