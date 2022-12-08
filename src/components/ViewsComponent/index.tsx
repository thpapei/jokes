import { IViewsComponentProps } from "../../interfaces/viewsComponent";
import getViewsColor from "../../util/getViewsColor";

const ViewsComponent: React.FC<IViewsComponentProps> = ({ views }) => {
  if (!views) {
    return null;
  }

  // Some colors do not have proper contrast
  // with the white background. The Readme.md says
  // that the element should be <span style="color:tomato">tomato</span>
  // but that does have offer visibility.
  return (
    <span
      style={{
        padding: "0.5rem",
        borderRadius: "5px",
        textAlign: "center",
        width: "50%",
        backgroundColor: getViewsColor(views).contrastColor,
        color: getViewsColor(views).color,
      }}
    >
      {views}
    </span>
  );
};

export default ViewsComponent;
