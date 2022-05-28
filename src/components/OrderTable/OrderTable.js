import { db } from "../../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { OrderRow } from "./OrderRow";

export const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersCollectionRef = collection(db, "orders");

    const getData = async () => {
      const data = await getDocs(ordersCollectionRef);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Termin sprzątania</TableCell>
            <TableCell>Lokal</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="right">Data utworzenia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, id) => (
            <OrderRow key={id} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
