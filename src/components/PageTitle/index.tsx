import { Divider, Typography } from "@mui/material";
import { IPageTitleProps } from "../../interfaces/pageTitle";

const PageTitle: React.FC<IPageTitleProps> = ({ title }) => (
  <>
    <Typography variant="h4">{title}</Typography>
    <Divider sx={{ marginBottom: "2rem" }} />
  </>
);

export default PageTitle;
