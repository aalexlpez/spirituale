import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Plus, Search, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Datos de ejemplo para los productos
const products = [
  {
    id: 1,
    name: "Smartphone X Pro",
    status: "Active",
    price: 999.0,
    totalSales: 150,
    createdAt: "6/23/2024",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Wireless Earbuds Ultra",
    status: "Active",
    price: 199.0,
    totalSales: 300,
    createdAt: "6/23/2024",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Smart Home Hub",
    status: "Active",
    price: 149.0,
    totalSales: 200,
    createdAt: "6/23/2024",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "4K Ultra HD Smart TV",
    status: "Active",
    price: 799.0,
    totalSales: 50,
    createdAt: "6/23/2024",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Gaming Laptop Pro",
    status: "Active",
    price: 1299.0,
    totalSales: 75,
    createdAt: "6/23/2024",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4 justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-900">
              Dashboard
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/dashboard/products" className="text-gray-500 hover:text-gray-900">
              Products
            </Link>
            <span className="text-gray-500">/</span>
            <span>All Products</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="mb-6">
          <div className="inline-flex h-10 items-center rounded-md bg-white border">
            <button className="px-3 py-1.5 text-sm font-medium bg-white text-gray-900 rounded-sm">All</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">Active</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">Draft</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">Archived</button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-gray-500">Manage your products and view their sales performance.</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </button>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="w-full overflow-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="h-12 px-4 text-left font-medium text-gray-500">Name</th>
                  <th className="h-12 px-4 text-left font-medium text-gray-500">Status</th>
                  <th className="h-12 px-4 text-left font-medium text-gray-500">Price</th>
                  <th className="h-12 px-4 text-left font-medium text-gray-500">Total Sales</th>
                  <th className="h-12 px-4 text-left font-medium text-gray-500">Created at</th>
                  <th className="h-12 px-4 text-left font-medium text-gray-500 w-10"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-md overflow-hidden border">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4">${product.price.toFixed(2)}</td>
                    <td className="p-4">{product.totalSales}</td>
                    <td className="p-4">{product.createdAt}</td>
                    <td className="p-4">
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="text-sm text-gray-500">Showing 1-5 of 10 products</div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 bg-white text-gray-400 cursor-not-allowed">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </button>
              <button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

