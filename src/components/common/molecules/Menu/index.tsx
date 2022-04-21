import { ActionButton, Avatar } from '../../atoms';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { Wrapper, StyledAvatar, StyledActionButton } from './styled';

const Menu = () => {
  return (
    <>
      <Wrapper>
        <StyledAvatar
          handleClick={() => console.log('avatar menu')}
          pic="https://mapio.net/images-p/12023046.jpg"
        />
        <StyledActionButton
          icon={BsFillGearFill}
          onClick={() => console.log('gear button menu')}
        />
        <ActionButton
          icon={AiOutlineMail}
          onClick={() => console.log('mail button menu')}
        />
      </Wrapper>
    </>
  );
};

export default Menu;
