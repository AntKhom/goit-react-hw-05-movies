import styled from "styled-components";
import { devices } from "./MovieList.styled";

export const List = styled.ul`
    // display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* margin-top: 10px; */
    padding: 10px;
    justify-content: center;

    @media screen and ${devices.tablet} {
         display: flex;
    }
`
export const Item = styled.li`
    @media screen and ${devices.tablet} {
        width: calc((100% - 40px)/3);
    }

    @media screen and ${devices.laptop} {
        width: calc((100% - 40px)/5);
    }
`
export const Foto = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1.5;
`
export const Name = styled.h3`
    text-align: right;
`