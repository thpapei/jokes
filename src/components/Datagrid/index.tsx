import { styled } from "@mui/material/styles";
import { DataGrid as MuiDataGrid, DataGridProps } from "@mui/x-data-grid";
import { TABLE_HEIGHT } from "./constants";

const rowsPerPageOptions = [5, 10];

const StyledDataGrid = styled(MuiDataGrid)(({ theme }) => ({
  // Style to remove row borders, like in
  // https://i.imgur.com/j4d9fNG.png
  border: "none",
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
    borderBottom: `none`,
    padding: "2rem",
  },
  "& .MuiDataGrid-columnHeaders": {
    borderBottom: `none`,
  },
}));

const DataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <div style={{ height: TABLE_HEIGHT, width: "100%" }}>
      <StyledDataGrid
        pagination
        paginationMode="server"
        rowsPerPageOptions={rowsPerPageOptions}
        {...props}
      />
    </div>
  );
};

export default DataGrid;
