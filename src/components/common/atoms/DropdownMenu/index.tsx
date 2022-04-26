import { Wrapper, StyledList, StyledUl, StyledATag } from './styled';

type Link = {
  url: string;
  title: string;
};

type Props = {
  links: Link[];
  className?: string;
};

const DropdownMenu = ({ links, className }: Props) => {
  return (
    <Wrapper {...{ className }}>
      <StyledUl>
        {links.map(({ url, title }) => {
          return (
            <StyledList key={title}>
              <StyledATag href={url}>{title}</StyledATag>
            </StyledList>
          );
        })}
      </StyledUl>
    </Wrapper>
  );
};

export default DropdownMenu;
