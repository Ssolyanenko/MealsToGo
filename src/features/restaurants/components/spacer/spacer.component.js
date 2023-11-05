import React from "react";
import styled from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
}

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom'
}

const getVariant = (position,size,theme) => {
    const property = positionVariant[position]
    const sizeIndex = sizeVariant[size]
    const value = theme.space[sizeIndex]
    console.log(value,property)
    return `${property}:${value}`
}
export const SpacerComponent = styled.View`
  ${({position, size, theme}) => {
    getVariant(position, size, theme)
  }}
`

SpacerComponent.defaultProps = {
    position: 'top',
    size: 'small'
}