'use client'
import { ChevronLeft, ChevronRight, Download, User } from "lucide-react"
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { useRouter } from 'next/navigation'


interface User {
    nombreCompleto: string;
    correo: string;
}

export default function AdminPage() {

    const [users, setUsers] = useState<User[]>([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        if (password === 'Spiritualelife2025&') {
        // if (password === '') {
            setIsAuthenticated(true);
            fetchUsers();
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/admin/get-users', { cache: 'no-store' });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            router.push('/');
            console.error('Error al consultar usuarios', error);
        }
    };

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(users);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Usuarios');
        XLSX.writeFile(workbook, 'usuarios.xlsx');
    };

    return (
        <div className="flex flex-col min-h-screen">
            {!isAuthenticated ? (
                <div className="flex flex-col items-center justify-center flex-1">
                    <h1 className="text-2xl font-bold mb-4">Ingrese la contraseña</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 p-2 border rounded"
                    />
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Ingresar
                    </button>
                </div>
            ) : (
                <>
                    {/* Header */}
                    <header className="border-b">
                    </header>

                    {/* Main content */}
                    <main className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl font-bold">Usuarios</h1>
                                <p className="text-gray-500">Usuarios regitrados para la conferencia del 22.03.25</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleExport}
                                    className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Export
                                </button>
                            </div>
                        </div>

                        <div className="border rounded-md">
                            <div className="w-full overflow-auto">
                                <table className="w-full text-sm">
                                    <thead className="border-b">
                                        <tr>
                                            <th className="h-12 px-4 text-left font-medium text-gray-500">Name</th>
                                            <th className="h-12 px-4 text-left font-medium text-gray-500">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index} className="border-b hover:bg-gray-50">
                                                <td className="p-4">{user.nombreCompleto}</td>
                                                <td className="p-4">{user.correo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3 border-t">
                                <div className="text-sm text-gray-500">Mostrando {users.length} usuarios</div>
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
                </>
            )}
        </div>
    );
}

