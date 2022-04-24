import { NavBar } from 'src/components/common/organisms';
import { Border } from 'src/components/common/templates';

import { StyledContainer, ContentContainer } from './styled';

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
