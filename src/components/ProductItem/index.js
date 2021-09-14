import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    row-gap: 2em;
    padding: 0.5rem;
    height: 24rem;
    width: 15rem;
    border: 1px solid #000000;
    border-radius: 8px;
    box-shadow: -8px 10px 7px -6px #777;
    cursor: pointer;
    .productImage {
        height: 69%;

        display: flex;
        justify-content: center;
        align-items: center;
        img {
            max-width: 12rem;
        }
    }
    .productDescription {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default function ProductItem({ item, i, setOpen, open }) {
    return (
        <Wrapper
            key={i}
            onClick={() => {
                setOpen(!open)
            }}
        >
            <div className="productImage">
                <img src={item.img} alt="product" />
            </div>
            <div className="productDescription">{item.name}</div>
        </Wrapper>
    )
}
