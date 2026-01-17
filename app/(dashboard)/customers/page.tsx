import { columns, Customer } from "./columns"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<Customer[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      status: "active",
      email: "john@example.com",
      role: "admin",
      lastActive: "2023-01-23",
    },
    {
      id: "489e1d42",
      name: "Jane Smith",
      status: "pending",
      email: "jane@example.com",
      role: "user",
      lastActive: "2023-01-22",
    },
    {
            id: "489e1d43",
            name: "Alice Johnson",
            status: "inactive",
            email: "alice@example.com",
            role: "user",
            lastActive: "2023-01-20"
        },
        {
            id: "489e1d44",
            name: "Bob Brown",
            status: "active",
            email: "bob@example.com",
            role: "guest",
            lastActive: "2023-01-18"
        },
        {
            id: "489e1d45",
            name: "Charlie White",
            status: "active",
            email: "charlie@example.com",
            role: "admin",
            lastActive: "2023-01-15"
        },
        {
            id: "489e1d46",
            name: "Diana Green",
            status: "pending",
            email: "diana@example.com",
            role: "user",
            lastActive: "2023-01-12"
        },
        {
            id: "489e1d47",
            name: "Evan Black",
            status: "active",
            email: "evan@example.com",
            role: "user",
            lastActive: "2023-01-10"
        },
        {
            id: "489e1d48",
            name: "Fiona Grey",
            status: "inactive",
            email: "fiona@example.com",
            role: "guest",
            lastActive: "2023-01-08"
        },
        {
            id: "489e1d49",
            name: "George Red",
            status: "active",
            email: "george@example.com",
            role: "admin",
            lastActive: "2023-01-05"
        },
        {
            id: "489e1d50",
            name: "Hannah Blue",
            status: "pending",
            email: "hannah@example.com",
            role: "user",
            lastActive: "2023-01-02"
        },
        {
            id: "489e1d51",
            name: "Ivan Yellow",
            status: "active",
            email: "ivan@example.com",
            role: "user",
            lastActive: "2023-01-01"
        },
  ]
}

export default async function CustomersPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Customers</h2>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
