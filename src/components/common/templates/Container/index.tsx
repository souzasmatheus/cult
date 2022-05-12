import { FC } from 'react';

import { NavBar } from 'src/components/common/organisms';

import { StyledContainer, ContentContainer, Border } from './styled';

const Container: FC = ({ children }) => {
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
