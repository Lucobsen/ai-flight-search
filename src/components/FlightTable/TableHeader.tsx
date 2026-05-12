import { TableCell, TableHead, Typography } from "@mui/material";

export const TableHeader = () => {
  return (
    <TableHead>
      <TableCell>
        <Typography sx={{ color: "#fff" }}>Flight</Typography>
      </TableCell>

      <TableCell>
        <Typography sx={{ color: "#fff" }}>Origin</Typography>
      </TableCell>

      <TableCell>
        <Typography sx={{ color: "#fff" }}>Destination</Typography>
      </TableCell>

      <TableCell>
        <Typography sx={{ color: "#fff" }}>Flight Type</Typography>
      </TableCell>

      <TableCell>
        <Typography sx={{ color: "#fff" }}>Airline</Typography>
      </TableCell>

      <TableCell>
        <Typography sx={{ color: "#fff" }}>ETA/EDT</Typography>
      </TableCell>
    </TableHead>
  );
};
