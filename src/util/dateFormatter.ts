import { GridValueFormatterParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

const dateFormatter = (params: GridValueFormatterParams<any>) =>
  params.value ? dayjs(params.value).format("DD MMM YYYY") : "-";

export default dateFormatter;
