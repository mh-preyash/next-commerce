"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    item: "Prodigy Series: Traditional Wood Double Bar Freestanding Ballet Barre",
    price: "$106.95",
    quantity: 1,
    total: "$106.95",
  },
];

const columns = [
  {
    key: "item",
    label: "ITEM",
  },
  {
    key: "price",
    label: "PRICE",
  },
  {
    key: "quantity",
    label: "QUANTITY",
  },
  {
    key: "total",
    label: "TOTAL",
  },
];

export default function Page() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
