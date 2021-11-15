import styled from 'styled-components'

export const SidebarLayout = styled.div`
  width: 15rem;
  position: fixed;
  height: 100vh;
  background-color: #1a1a1a;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SidebarStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid cyan;
`
export const SidebarList = styled.ul`
  width: 100%;
  .active-class {
    background-color: cyan;
    /* text-align: center; */
  }
`
export const SidebarListItem = styled.li`
  list-style: none;
  a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: white;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 50%;
      background-color: cyan;
      transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
      opacity: 0.2;
    }
  }
  a:hover::before {
    width: 100%;
    height: 100%;
  }
`
