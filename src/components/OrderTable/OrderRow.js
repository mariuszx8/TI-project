import {
  Box,
  Chip,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

export const OrderRow = ({ order }) => {
  const [open, setOpen] = useState(false);

  const rooms = order.roomsCount > 1 ? "pokoje" : "pokój";
  const bathrooms = order.bathroomsCount > 1 ? "łazienki" : "łazienka";
  const address1 = `${order.address} ${order.houseNumber}${
    order.apartment !== "" ? `/${order.apartment}` : ""
  }`;
  const address2 = `${order.zipCode} ${order.city}`;

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order.date}
        </TableCell>
        <TableCell>{order.type}</TableCell>
        <TableCell align="center">
          <Chip label={order.status} color="primary" />
        </TableCell>
        <TableCell align="right">{order.created}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Szczegóły zamówienia
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Termin</TableCell>
                    <TableCell>Lokal</TableCell>
                    <TableCell>Adres</TableCell>
                    <TableCell>Kontakt</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {order.date} {order.time}
                    </TableCell>
                    <TableCell>{`${order.type}, ${order.roomsCount} ${rooms}, ${order.bathroomsCount} ${bathrooms}, ${order.kitchen}`}</TableCell>
                    <TableCell>
                      {address1}
                      <br />
                      {address2}
                    </TableCell>
                    <TableCell>
                      <div>{order.name}</div>
                      <div>{order.phone}</div>
                      <div>{order.email}</div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {(order.extra || order.contactExtra) && (
                <div>
                  <Typography variant="h6" gutterBottom component="div" mt={2}>
                    Dodatkowe informacje
                  </Typography>
                  <Typography gutterBottom component="div" mt={1}>
                    {order.extra}
                  </Typography>
                  <Typography gutterBottom component="div" mt={1}>
                    {order.contactExtra}
                  </Typography>
                </div>
              )}
              {order.services && (
                <div>
                  <Typography variant="h6" gutterBottom component="div" mt={2}>
                    Usługi
                  </Typography>
                  {order.services.length > 0 &&
                    order.services.map((service, id) => (
                      <Chip
                        key={id}
                        label={service.name}
                        color="primary"
                        sx={{
                          mr: 1,
                        }}
                      />
                    ))}
                </div>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
