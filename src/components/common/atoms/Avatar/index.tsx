import { AvatarImg } from './styled';

type Props = {
  onClick: () => void;
  src: string;
  className?: string;
};

const Avatar = ({ onClick, src, className }: Props) => {
  return <AvatarImg {...{ src, onClick, className }} />;
};

export default Avatar;
