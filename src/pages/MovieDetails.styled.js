import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieInfo = styled.section`
    display: flex;
    padding-bottom: 16px;
    margin-top: 16px;
    border-bottom: 1px solid;
    
`

export const Poster = styled.img`
    margin-right: 16px;
`
export const Title = styled.h2`
    margin-top: 0;
`
export const List = styled.ul`
    display: inline-flex;
    gap: 16px;
    padding: 0;
    margin-top: 0;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`
