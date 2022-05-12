import { LogoImg } from './styled';

type Props = {
  onClick: () => void;
  src: string;
};

const Logo = ({ onClick, src }: Props) => {
  return <LogoImg {...{ onClick, src }} />;
};

export default Logo;
