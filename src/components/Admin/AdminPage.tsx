'use client'
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { useState } from 'react';
import * as XLSX from 'xlsx';


interface User {
    nombreCompleto: string;
    correo: string;
}

const UsersTable = ({ users }: { users: User[] }) => (
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
);

const BuyersTable = ({ buyers }: { buyers: User[] }) => (
    <table className="w-full text-sm">
        <thead className="border-b">
            <tr>
                <th className="h-12 px-4 text-left font-medium text-gray-500">Name</th>
                <th className="h-12 px-4 text-left font-medium text-gray-500">Email</th>
            </tr>
        </thead>
        <tbody>
            {buyers.map((buyer, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">{buyer.nombreCompleto}</td>
                    <td className="p-4">{buyer.correo}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default function AdminPage() {

    const [users, setUsers] = useState<User[]>([]);
    const [buyers, setBuyers] = useState<User[]>([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('users');

    const handleLogin = () => {
        // if (password === 'Spiritualelife2025&') {
        if (password === '') {
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
            // router.push('/');
            console.error('Error al consultar usuarios', error);
        }
    };

    const fetchBuyers = async () => {
        try {
            // const response = await fetch('/api/admin/get-buyers', { cache: 'no-store' });
            const response = await fetch('/api/admin/get-buyers', { cache: 'no-store' });
            const data = await response.json();
            setBuyers(data);
        } catch (error) {
            // router.push('/');
            console.error('Error al consultar compradores', error);
        }
    };

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(activeTab === 'users' ? users : buyers);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, activeTab === 'users' ? 'Usuarios' : 'Compradores');
        XLSX.writeFile(workbook, activeTab === 'users' ? 'usuarios.xlsx' : 'compradores.xlsx');
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'users') {
            fetchUsers();
        } else {
            fetchBuyers();
        }
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
                        <div className="tabs flex justify-center my-4">
                            <button
                                onClick={() => handleTabChange('users')}
                                className={`px-4 py-2 mx-2 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
                            >
                                Users
                            </button>
                            <button
                                onClick={() => handleTabChange('buyers')}
                                className={`px-4 py-2 mx-2 ${activeTab === 'buyers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
                            >
                                Buyers
                            </button>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl font-bold">{activeTab === 'users' ? 'Usuarios' : 'Compradores'}</h1>
                                <p className="text-gray-500">{activeTab === 'users' ? 'Usuarios registrados para la conferencia del 22.03.25' : 'Compradores registrados'}</p>
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
                                {activeTab === 'users' ? <UsersTable users={users} /> : <BuyersTable buyers={buyers} />}
                            </div>
                            <div className="flex items-center justify-between px-4 py-3 border-t">
                                <div className="text-sm text-gray-500">Mostrando {activeTab === 'users' ? users.length : buyers.length} {activeTab === 'users' ? 'usuarios' : 'compradores'}</div>
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

