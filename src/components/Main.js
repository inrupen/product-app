import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "./Header/Header"
import SelectionGrid from "./SelectionGrid"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
        display: flex;
        justify-content: center;
        height: 30rem;
    }

`

export default function Main() {
    
    return (
        <Wrapper>
            <Header />
            <SelectionGrid />
        </Wrapper>
    )
}
