import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import flights from "../../data/flights.json";

export const TableCore = () => {
  const flightArray = Object.values(flights);
  console.log(flightArray);

  return (
    <TableBody>
      {flightArray.map(
        ({ flightKey, origin, destination, airline, timestamp, type }) => (
          <TableRow key={flightKey}>
            <TableCell>
              <Typography sx={{ color: "#fff" }}>{flightKey}</Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ color: "#fff" }}>{origin}</Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ color: "#fff" }}>{destination}</Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ color: "#fff" }}>
                {type === "A" ? "Arrival" : "Departure"}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ color: "#fff" }}>{airline}</Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ color: "#fff" }}>
                {new Date(timestamp).toLocaleString("en", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </TableCell>
          </TableRow>
        ),
      )}
    </TableBody>
  );
};
