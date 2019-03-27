import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
/* eslint react/destructuring-assignment: 0 */

class BaseSubMenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.menuItemRefs = [];
  }

  componentDidUpdate() {
    if (this.props.focusIndex < this.props.children.length) this.menuItemRefs[this.props.focusIndex].focus();
  }

  render() {
    return (
      <ul className={ this.props.className }>
        {Object.entries(this.props.children).map((subMenuItem, index) => (
          React.cloneElement(subMenuItem[1], {
            ref: input => { this.menuItemRefs[index] = input; },
            key: subMenuItem[1].props.children,
            ...subMenuItem.props,
          })
        ))}
      </ul>
    );
  }
}

BaseSubMenuItems.propTypes = {
  className: PropTypes.string,
  focusIndex: PropTypes.number,
  children: PropTypes.node,
};

BaseSubMenuItems.defaultProps = {
  className: null,
  focusIndex: undefined,
  children: null,
};

const SubMenuItems = styled(BaseSubMenuItems)({
  listStyle: "none",
  paddingLeft: "0",
  margin: "0",
});

export default SubMenuItems;