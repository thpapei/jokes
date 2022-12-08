import { Link } from "react-router-dom";
import { ITitleComponentProps } from "../../interfaces/titleComponent";

const TitleComponent: React.FC<ITitleComponentProps> = ({ title, id }) => {
  return <Link to={`/${id}`}>{title}</Link>;
};

export default TitleComponent;
