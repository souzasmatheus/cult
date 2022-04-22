import { AiOutlineMail } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';

import {
  Wrapper,
  StyledAvatar,
  StyledActionButton,
  LeftBorder,
} from './styled';

const Menu = () => {
  return (
    <>
      <Wrapper>
        <LeftBorder />
        <StyledAvatar
          handleClick={() => console.log('avatar menu')}
          pic="https://mapio.net/images-p/12023046.jpg"
        />
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
    </>
  );
};

export default Menu;
