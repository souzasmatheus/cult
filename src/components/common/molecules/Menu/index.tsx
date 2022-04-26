import { AiOutlineMail } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';

import {
  Wrapper,
  StyledAvatar,
  StyledActionButton,
  LeftBorder,
  DropdownWrapper,
  StyledDropdownMenu,
} from './styled';

const avatarLinks = [
  {
    title: 'Fart',
    url: '#',
  },
  {
    title: 'Ezekiel',
    url: '#',
  },
  {
    title: 'Coding',
    url: '#',
  },
];

const Menu = () => {
  return (
    <Wrapper>
      <LeftBorder />
      <DropdownWrapper>
        <StyledAvatar
          onClick={() => console.log('avatar menu')}
          src="https://mapio.net/images-p/12023046.jpg"
        />
        <StyledDropdownMenu links={avatarLinks} />
      </DropdownWrapper>

      <StyledActionButton
        iconSize={20}
        icon={AiOutlineMail}
        onClick={() => console.log('mail button menu')}
      />
      <StyledActionButton
        iconSize={20}
        icon={BsFillGearFill}
        onClick={() => console.log('gear button menu')}
      />
    </Wrapper>
  );
};

export default Menu;
