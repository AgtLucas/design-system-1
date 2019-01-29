import React from "react";
import PropTypes from "prop-types";
import Text from "../Type/Text";

export const FormatText = props => (
  <Text
    mb={ 0 }
    fontSize="12px"
    lineHeight="16px"
    color="darkGrey"
    { ...props }
  />
);

FormatText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FormatText.defaultProps = {
  children: null,
};

export default FormatText;