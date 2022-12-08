import { GridValueFormatterParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

const dateFormatter = (params: GridValueFormatterParams<any> | number) => {
  if (typeof params === "number") {
    return params ? dayjs(params).format("DD MMM YYYY") : "-";
  }
  return params.value ? dayjs(params.value).format("DD MMM YYYY") : "-";
};

export default dateFormatter;
