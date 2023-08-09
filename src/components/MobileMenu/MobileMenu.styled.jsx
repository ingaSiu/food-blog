import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const SlidingMenu = styled.div`
  position: absolute;
  top: 4.2rem;
  left: 0;
  right: 0;
  height: 0;
  background-color: white;
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  ${({ active }) =>
    active &&
    css`
      height: 11.125rem;
      border-bottom: 1px solid #1f343e;
    `}
`;

export const LinkContainerMobile = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px 16px;
  height: 100%;
`;
export const MobileLink = styled(Link)`
  color: inherit;
  font-size: 0.875rem;
  text-decoration: none;
  &:hover {
    color: #4eb3e3;
  }
`;

export const MenuWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 1.1431rem;
  height: 2rem;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
