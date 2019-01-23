import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color , space , themeGet} from 'styled-system'
import theme from '../theme.js'
import {subPx} from '../utils.js'

const InputField = styled.input`
    width: 100%
    border: 1px solid;
    border-color: ${props => props.borderColor ? themeGet("colors."+props.borderColor,props.borderColor) : props.theme.colors.grey}; 
    border-radius: ${theme.radii[1]};
    padding: ${subPx(theme.space[2])};
    font-size: ${theme.fontSizes[2]};
    font-family: ${theme.fonts.base};
    line-height: ${props => props.theme.lineHeights.base};
    ${space}
    ${color}
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.blue}; 
        box-shadow: 0 0 3px ${props => props.theme.colors.blue};
    }
`

InputField.defaultProps = {
    theme: theme
}

export default InputField