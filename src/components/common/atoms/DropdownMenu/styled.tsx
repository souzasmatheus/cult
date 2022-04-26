import styled from 'styled-components';

const Wrapper = styled.div`
  padding 0.75rem; 
  border-radius: .25rem;
  background: ${({ theme }) => theme.colors.grey.mist};
  display: inline-block;
  width: 90px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

`;

const StyledUl = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const StyledList = styled.li`
  margin-bottom: 1.5rem;
  transition: opacity 0.5s;

  &:first-child {
    margin-top: 0.5rem;
  }
  &:last-child {
    margin-bottom: 0.5rem;
  }

  &:hover {
    opacity: 0.5;
  }

  cursor: pointer;
`;

const StyledATag = styled.a`
  text-decoration: none;
  color: black;
`;

export { Wrapper, StyledList, StyledUl, StyledATag };
