import { LogoImg } from './styled';

type Props = {
  handleClick: () => void;
  pic: string;
};

const Logo = ({ handleClick, pic }: Props) => {
  return <LogoImg src={pic} onClick={handleClick} />;
};

export default Logo;
