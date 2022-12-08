import { DataGrid as MuiDataGrid, DataGridProps } from "@mui/x-data-grid";
import { TABLE_HEIGHT } from "./constants";

const rowsPerPageOptions = [5, 10];

const DataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <div style={{ height: TABLE_HEIGHT, width: "100%" }}>
      <MuiDataGrid
        pagination
        paginationMode="server"
        rowsPerPageOptions={rowsPerPageOptions}
        {...props}
      />
    </div>
  );
};

export default DataGrid;
