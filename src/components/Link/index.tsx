import { Link as ReactRouterLink } from "react-router-dom";
import { LinkProps } from "../../interfaces/linkProps";

const Link: React.FC<LinkProps> = (props) => {
  return <ReactRouterLink style={{ color: "#33adff" }} {...props} />;
};

export default Link;
