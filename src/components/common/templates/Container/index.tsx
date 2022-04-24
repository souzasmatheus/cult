import { NavBar } from 'src/components/common/organisms';

import { StyledContainer, ContentContainer, Border } from './styled';

const Container = ({ children }: any) => {
  return (
    <>
      <Border>
        <StyledContainer>
          <NavBar />
        </StyledContainer>
      </Border>
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

export default Container;
