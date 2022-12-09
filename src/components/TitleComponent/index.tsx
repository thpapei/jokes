import { ITitleComponentProps } from "../../interfaces/titleComponent";
import Link from "../Link";

const TitleComponent: React.FC<ITitleComponentProps> = ({ title, id }) => {
  return (
    <Link style={{ color: "#33adff" }} to={`/${id}`}>
      {title}
    </Link>
  );
};

export default TitleComponent;
