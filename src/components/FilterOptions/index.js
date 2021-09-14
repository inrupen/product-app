import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    label{
        font-size: 16px;
        margin-left: 1rem;
    }
    select {
        margin: 0.5rem;
        background-color: #e6e6e6;
        width: 10rem;
        font-size: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 2rem;
    }
`

class FilterOptions extends React.Component {
    changeOption(type, e) {
        var val = e.target.value
        this.props.changeOption(val, type)
    }

    render() {
        return (
            <Wrapper>
                <label>Type</label>
                <select
                    id="type"
                    value={this.props.typeOptions}
                    onChange={this.changeOption.bind(this, "type")}
                >
                    {this.props.typeOptions.map(function (option) {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    })}
                </select>

                <label>Color</label>
                <select
                    id="color"
                    value={this.props.colorOptions}
                    onChange={this.changeOption.bind(this, "colors")}
                >
                    {this.props.colorOptions.map(function (option) {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    })}
                </select>

                <label>Name</label>
                <select
                    id="name"
                    value={this.props.nameOptions}
                    onChange={this.changeOption.bind(this, "name")}
                >
                    {this.props.nameOptions.map(function (option) {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    })}
                </select>
            </Wrapper>
        )
    }
}

export default FilterOptions
