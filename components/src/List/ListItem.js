import styled from "styled-components";
import { space, color } from "styled-system";
import theme from "../theme";

const ListItem = styled.li`
display: flex;
&:before{
  content: "•";
  margin-right: ${theme.space[3]};
}
&:last-child{
  margin-bottom: 0;
}
${space}
${color}
`;

ListItem.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
};

ListItem.defaultProps = {
  color: "currentColor",
  mb: 2,
};

export default ListItem;
