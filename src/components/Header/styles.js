import styled from 'styled-components';

export const NavContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  border-bottom: ${({ theme }) => `1px solid ${theme.headingFontColor}`};
  li {
    flex: 1;
    cursor: pointer;
    text-align: center;
    padding: 20px 0px;
    font-size: 20px;
  }
`;