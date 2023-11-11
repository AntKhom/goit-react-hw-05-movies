import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* margin-top: 10px; */
    padding: 10px;
    justify-content: center;
`
export const Item = styled.li`
    width: calc((100% - 40px)/5);
`
export const Foto = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1.5;
`
export const Name = styled.h3`
    text-align: right;
`