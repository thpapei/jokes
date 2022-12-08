import { GridValueFormatterParams } from "@mui/x-data-grid";

const authorFormatter = (params: GridValueFormatterParams<any>) => {
  if (!params.value) {
    return "-";
  }

  if (!params.value.includes("@")) {
    return params.value;
  }

  // This finds the domain of the email
  const domain = params.value.split("@")[1].split(".")[0];

  // and then the domain gets censored, according to this example:
  // crubery6s@\*\*\*.org
  return params.value.replace(domain, "***");
};

export default authorFormatter;
