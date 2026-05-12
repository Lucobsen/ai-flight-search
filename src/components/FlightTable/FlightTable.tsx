import { Table, TableContainer } from "@mui/material";
import { TableCore } from "./TableCore";
import { TableHeader } from "./TableHeader";

export const FlightTable = () => {
  return (
    <TableContainer sx={{ marginBottom: "100px" }}>
      <Table>
        <TableHeader />
        <TableCore />
      </Table>
    </TableContainer>
  );
};
