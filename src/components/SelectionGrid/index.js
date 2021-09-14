import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { fetchData } from "../../service/products"
import FilterOptions from "../FilterOptions"
import ProductItem from "../ProductItem"

const Wrapper = styled.div`
    margin: 1rem 8rem;
    display: flex;
    flex-direction: column;
    .customSelect {
        /* display: flex; */
    }

    .grid {
        display: flex;
        justify-content: center;

        .selectProduct {
            justify-content: flex-start;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-wrap: wrap;
            row-gap: 2em;
            column-gap: 2em;
            margin: 5rem;
        }
    }
`

export default function SelectionGrid() {
    const [open, setOpen] = useState(false)
    const [results, setResults] = useState([])
    const [productType, setProductType] = useState([])
    const [productName, setProductName] = useState([])
    const [productColor, setProductColor] = useState([])

    var filteredItems = []

    const [product, setProduct] = useState({
        type: "",
        name: "",
        colors: "",
        multiple: false,
    })

    useEffect(() => {
        fetchData(function (err, data) {
            setResults(data)
            console.log(data)
        })

        if (results) {
            //create the values of the dropdown from the data
            var typeArray = results.map(function (item) {
                return item.type
            })
            var colorArray = results.map(function (item) {
                return item.colors
            })
            colorArray = colorArray.flat(1)
            var nameArray = results.map(function (item) {
                return item.name
            })
            typeArray = [...new Set(typeArray)]
            colorArray = [...new Set(colorArray)]
            nameArray = [...new Set(nameArray)]
            typeArray.unshift("")
            colorArray.unshift("")
            nameArray.unshift("")

            setProductType(typeArray)
            setProductColor(colorArray)
            setProductName(nameArray)
        }
    }, [results])
    const checked = e => {
        setProduct({ ...product, multiple: e.target.value })
    }
    const filterItems = (val, type) => {
        switch (type) {
            case "type":
                setProduct({ ...product, type: val })
                break
            case "colors":
                setProduct({ ...product, colors: val })
                break
            case "name":
                setProduct({ ...product, name: val })
                break
            default:
                break
        }
    }

    filteredItems = results
    var state = product
    var filterProperties = ["type", "colors", "name"]
    filterProperties.forEach(function (filterBy) {
        var filterValue = state[filterBy]
        if (filterValue) {
            filteredItems = filteredItems.filter(function (item) {
                return (
                    item[filterBy] === filterValue ||
                    item[filterBy][0] === filterValue ||
                    item[filterBy][1] === filterValue ||
                    item[filterBy][2] === filterValue ||
                    item[filterBy][3] === filterValue
                )
            })
        }
    })
    function reset() {
        filteredItems = results
        var state = product
        var filterProperties = ["type", "colors", "name"]
        filterProperties.forEach(function (filterBy) {
            var filterValue = state[filterBy]
            if (filterValue) {
                filteredItems = filteredItems.filter(function (item) {
                    return (
                        item[filterBy] === filterValue ||
                        item[filterBy][0] === filterValue ||
                        item[filterBy][1] === filterValue ||
                        item[filterBy][2] === filterValue ||
                        item[filterBy][3] === filterValue
                    )
                })
            }
        })
    }
    return (
        <Wrapper>
            <div className="customSelect">
                <FilterOptions
                    data={results}
                    typeOptions={productType}
                    colorOptions={productColor}
                    nameOptions={productName}
                    changeOption={filterItems}
                    reset={reset}
                />
            </div>
            <div className="grid">
                {results && (
                    <div className="selectProduct">
                        {filteredItems.map((item, i) => (
                            <ProductItem
                                item={item}
                                i={i}
                                open={open}
                                setOpen={setOpen}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}
