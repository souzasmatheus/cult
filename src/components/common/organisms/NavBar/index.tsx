import { Logo, LongButton } from 'src/components/common/atoms';
import { Menu, SearchBar } from 'src/components/common/molecules';

import { MainWrapper, WrapperLeft, WrapperRight } from './styled';

const NavBar = () => {
  return (
    <MainWrapper>
      <WrapperLeft>
        <Logo
          handleClick={() => console.log('logo clicked')}
          pic="https://placeholderlogo.com/img/placeholder-logo-1.png"
        />
        <SearchBar
          onSubmit={() => console.log('search bar submit')}
          placeholderText="Search"
        />
      </WrapperLeft>
      <WrapperRight>
        <LongButton onClick={() => console.log('long button clicked')}>
          Not-Fart
        </LongButton>
        <Menu />
      </WrapperRight>
    </MainWrapper>
  );
};
/*
<div flex space between>
  <div flex space between>
    logo
    searchbar
  </div>
  <div flex space between>
    long button
    menu 
  </div>
</div>
*/

export default NavBar;
