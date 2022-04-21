import { AvatarImg } from './styled';

type Props = {
  handleClick: () => void;
  pic: string;
  className?: string;
};

const Avatar = ({ handleClick, pic, className }: Props) => {
  return <AvatarImg src={pic} onClick={handleClick} className={className} />;
};

export default Avatar;
