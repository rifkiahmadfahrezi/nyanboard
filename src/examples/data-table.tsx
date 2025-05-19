"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

const products: ProductOrder[] = [
  {
    id: 1,
    name: "Laptop Pro 16",
    price: "1668.98",
    status: "success",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "1630.94",
    status: "success",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "1059.99",
    status: "success",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "397.67",
    status: "success",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    price: "1964.31",
    status: "success",
  },
  {
    id: 6,
    name: "4K Monitor",
    price: "1458.75",
    status: "success",
  },
  {
    id: 7,
    name: "External SSD 1TB",
    price: "1734.45",
    status: "onprocess",
  },
  {
    id: 8,
    name: "Smartwatch Series 5",
    price: "1025.86",
    status: "onprocess",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: "471.56",
    status: "success",
  },
  {
    id: 10,
    name: "Gaming Chair",
    price: "1683.80",
    status: "failed",
  },
  {
    id: 11,
    name: "USB-C Hub",
    price: "913.60",
    status: "success",
  },
  {
    id: 12,
    name: "Portable Charger",
    price: "817.89",
    status: "failed",
  },
  {
    id: 13,
    name: "Smart TV 55-inch",
    price: "1609.28",
    status: "success",
  },
  {
    id: 14,
    name: "Air Purifier",
    price: "825.09",
    status: "failed",
  },
  {
    id: 15,
    name: "Coffee Maker",
    price: "438.41",
    status: "success",
  },
  {
    id: 16,
    name: "Electric Scooter",
    price: "822.26",
    status: "onprocess",
  },
  {
    id: 17,
    name: "Smart Home Hub",
    price: "1048.29",
    status: "failed",
  },
  {
    id: 18,
    name: "Fitness Tracker",
    price: "1550.66",
    status: "failed",
  },
  {
    id: 19,
    name: "Camera DSLR",
    price: "1878.14",
    status: "onprocess",
  },
  {
    id: 20,
    name: "Noise Cancelling Earbuds",
    price: "1500.35",
    status: "onprocess",
  },
  {
    id: 21,
    name: "Tablet Pro",
    price: "703.69",
    status: "failed",
  },
  {
    id: 22,
    name: "Smart Door Lock",
    price: "799.80",
    status: "success",
  },
  {
    id: 23,
    name: "VR Headset",
    price: "626.22",
    status: "failed",
  },
  {
    id: 24,
    name: "Robot Vacuum",
    price: "520.61",
    status: "success",
  },
  {
    id: 25,
    name: "Wireless Charging Pad",
    price: "1024.72",
    status: "onprocess",
  },
]

export type ProductOrder = {
  id: number
  name: string
  status: "success" | "onprocess" | "failed"
  price: string
}

const columns: ColumnDef<ProductOrder>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Product Name <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status")
      const getStatus = (status: ProductOrder["status"]) => {
        switch (status) {
          case "success":
            return "success"
          case "onprocess":
            return "pending"
          case "failed":
            return "destructive"
          default:
            return "secondary"
        }
      }
      return (
        <Badge variant={getStatus(status as ProductOrder["status"])}>
          {status as string}
        </Badge>
      )
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(row.getValue("price")))}
      </div>
    ),
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    state: { sorting, columnVisibility, columnFilters },
    initialState: { pagination: { pageSize: 5 } },
  })

  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="flex items-center py-4 relative w-full"
      >
        <Input
          id="search"
          type="search"
          placeholder="Search products..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full pr-9"
        />
        <Search className="size-5 absolute right-3 text-muted-foreground" />
      </label>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
