import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "./MovieList.styled";

export const Links = styled(Link)`
    display: block;
    position: relative;
    // width: calc((100% - 40px)/5);
    // overflow: hidden;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1 1 auto;
    :hover {
        transform: scale(1.03);
    }
    
    @media screen and ${devices.tablet} {
        width: calc((100% - 40px)/3);
    }

    @media screen and ${devices.laptop} {
        width: calc((100% - 40px)/5);
    }
`;

export const Posters = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    
`;

export const Titles = styled.p`
    // width: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 0; 
    left: 0;
    text-align: center;
    line-height: 18px;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`

