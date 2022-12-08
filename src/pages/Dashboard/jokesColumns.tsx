import { GridColDef } from "@mui/x-data-grid";
import TitleComponent from "../../components/TitleComponent";
import ViewsComponent from "../../components/ViewsComponent";
import authorFormatter from "../../util/authorFormatter";
import dateFormatter from "../../util/dateFormatter";

const jokesColumns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, hide: true },
  {
    field: "Title",
    headerName: "Title",
    flex: 1,
    renderCell: (params) => (
      <TitleComponent title={params?.value} id={params.row.id} />
    ),
  },
  { field: "Body", headerName: "Body", flex: 2 },
  {
    field: "Author",
    headerName: "Author",
    flex: 1,
    valueFormatter: authorFormatter,
  },
  {
    field: "Views",
    headerName: "Views",
    flex: 1,
    renderCell: (params) => <ViewsComponent views={params.value} />,
  },
  {
    field: "CreatedAt",
    headerName: "CreatedAt",
    flex: 1,
    valueFormatter: dateFormatter,
  },
];

export default jokesColumns;
