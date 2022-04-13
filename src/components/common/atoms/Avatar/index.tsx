import { AvatarImg } from './styled';

type Props = {
  handleClick: () => void;
  pic: string;
};

const Avatar = ({ handleClick, pic }: Props) => {
  return (
    <>
      <AvatarImg src={pic} onClick={handleClick} />
    </>
  );
};

export default Avatar;
