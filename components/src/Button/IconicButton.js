import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import theme from "../theme";
import Icon from "../Icon/Icon";
import Text from "../Type/Text";
import icons from "../../icons/icons.json";

const Wrapper = styled.button`
  ${space}
  background: transparent;
  border: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: ${theme.space[1]} ${theme.space[0]};
  color: ${theme.colors.darkBlue};
  cursor: ${props => (props.disabled ? "arrow" : "pointer")};

  ${Icon} {
    border-radius: 50%;
    transition: .2s;
    min-width: 32px;
  }
  ${Text} {
    display: "block",
    fontWeight: props.theme.fontWeights[2],
    textAlign: "left",
  }
  &:hover{
    ${Icon} {
        background ${theme.colors.lightBlue};
    }
  }
  &:focus {outline: none;}
  &:active {
    ${Icon} {
      transform: scale(0.875); transition: .2s ease-in;}
    }
  }
  &:disabled {
    opacity: .5;
    &:hover, &:active {
      ${Icon} {
        background: none;
        transform: none;
      }
    }
  }
`;

const IconicButton = props => {
  const {
    children,
    icon,
  } = props;

  return (
    <Wrapper label={ children } { ...props }>
      <Icon size={ theme.space[5] } name={ icon } p={ 1 } />
      <Text mr={ 1 } mb={ 0 } ml={ 1 }>{ children }</Text>
    </Wrapper>
  );
};

export const names = Object.keys(icons);

IconicButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(names).isRequired,
};

IconicButton.defaultProps = {
  disabled: false,
};

export default IconicButton;
