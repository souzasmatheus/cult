import { Logo, LongButton } from 'src/components/common/atoms';
import { Menu, SearchBar } from 'src/components/common/molecules';

import { MainWrapper, WrapperLeft, WrapperRight } from './styled';

const NavBar = () => {
  return (
    <MainWrapper>
      <WrapperLeft>
        <Logo
          onClick={() => console.log('logo clicked')}
          src="https://placeholderlogo.com/img/placeholder-logo-1.png"
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

export default NavBar;
