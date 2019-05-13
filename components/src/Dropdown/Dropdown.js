import React from "react";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import { DetectOutsideClick } from "../Utils";
import { IconicButton } from "../Button";
import DropdownMenu from "./DropdownMenu";

const keyCode = Object.freeze({
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
});

/* eslint-disable react/destructuring-assignment */
class MenuTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
  }

  componentWillUnmount() {
    this.clearScheduled();
  }

  setMenuRef(node) {
    this.menuRef = node;
  }

  setSubMenuState(newState, skipTimer = false) {
    this.clearScheduled();
    if (!skipTimer) {
      this.timeoutID = setTimeout(
        () => this.setState({ open: newState }),
        newState ? this.props.showDelay : this.props.hideDelay
      );
    } else {
      this.setState({ open: newState });
    }
  }

  closeMenu(skipTimer) {
    this.setSubMenuState(false, skipTimer);
  }

  openMenu(skipTimer) {
    this.setSubMenuState(true, skipTimer);
  }

  subMenuEventHandlers() {
    return {
      onClick: () => {
        if (!this.state.open) this.openMenu();
      },
      onBlur: () => this.closeMenu(),
      onFocus: () => this.openMenu(),
      onKeyDown: e => this.handleKeyDown(e)
    };
  }

  menuTriggerEventHandlers() {
    return {
      onBlur: () => this.closeMenu(),
      onClick: () => this.openMenu(),
      onKeyDown: e => this.handleKeyDown(e)
    };
  }

  clearScheduled() {
    clearTimeout(this.timeoutID);
  }

  handleOutsideClick() {
    this.closeMenu(true);
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case keyCode.ESC:
        this.closeMenu(true);
        break;
      default:
        break;
    }
  }

  render() {
    const { trigger, children, backgroundColor, placement, modifiers, renderArrow } = this.props;
    const childrenFnc = typeof children === "function" ? children : () => children;
    return (
      <Manager>
        <Reference>
          {({ ref }) =>
            React.cloneElement(trigger(), {
              "aria-haspopup": true,
              "aria-expanded": this.state.open,
              ...this.menuTriggerEventHandlers(),
              ref
            })
          }
        </Reference>
        {this.state.open && (
          <Popper placement={placement} modifiers={modifiers}>
            {popperProps => (
              <DropdownMenu
                backgroundColor={backgroundColor}
                popperProps={popperProps}
                renderArrow={renderArrow}
                {...this.subMenuEventHandlers()}
                ref={node => {
                  popperProps.ref(node);
                  this.setMenuRef(node);
                }}
              >
                <DetectOutsideClick onClick={this.handleOutsideClick} clickRef={this.menuRef} />
                {childrenFnc({
                  closeMenu: () => {
                    this.closeMenu(true);
                  },
                  openMenu: () => {
                    this.openMenu(true);
                  }
                })}
              </DropdownMenu>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}
/* eslint-enable react/destructuring-assignment */

MenuTrigger.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  showDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  backgroundColor: PropTypes.string,
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end"
  ]),
  modifiers: PropTypes.shape({})
};

MenuTrigger.defaultProps = {
  showDelay: "100",
  hideDelay: "200",
  trigger: () => <IconicButton icon="more" />,
  backgroundColor: undefined,
  placement: "bottom-start",
  modifiers: { flip: { behavior: ["bottom"] } }
};

export default MenuTrigger;