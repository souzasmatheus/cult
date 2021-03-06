import styled from 'styled-components';

const AvatarImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.purple.scampi};
`;

export { AvatarImg };
