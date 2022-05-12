import { useState } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';

import { Avatar } from 'src/components/common/atoms';

import {
  Wrapper,
  StyledActionButton,
  LeftBorder,
  DropdownWrapper,
  StyledDropdownMenu,
} from './styled';

const avatarLinks = [
  {
    title: 'Avatar 1',
    url: '#',
  },
  {
    title: 'Avatar 2',
    url: '#',
  },
  {
    title: 'Avatar 3',
    url: '#',
  },
];

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<null | number>(null);
  const toggle = (num: number) => {
    setOpenMenu((prevState) => (prevState !== num ? num : null));
  };

  return (
    <Wrapper>
      <LeftBorder />
      <DropdownWrapper>
        <Avatar
          onClick={() => toggle(1)}
          src="https://mapio.net/images-p/12023046.jpg"
        />
        {openMenu === 1 && <StyledDropdownMenu links={avatarLinks} />}
      </DropdownWrapper>

      <DropdownWrapper>
        <StyledActionButton
          iconSize={20}
          icon={AiOutlineMail}
          onClick={() => toggle(2)}
        />
        {openMenu === 2 && <StyledDropdownMenu links={avatarLinks} />}
      </DropdownWrapper>

      <DropdownWrapper>
        <StyledActionButton
          iconSize={20}
          icon={BsFillGearFill}
          onClick={() => toggle(3)}
        />
        {openMenu === 3 && <StyledDropdownMenu links={avatarLinks} />}
      </DropdownWrapper>
    </Wrapper>
  );
};

export default Menu;
