"use client"; 

import { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    address: { city: string };
}

interface Props {
    users: User[];
}

export default function UserClient({ users }: Props) {
    const [query, setQuery] = useState("");

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search users by name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-4 py-2 rounded-xl shadow border focus:ring-2 focus:ring-indigo-400 outline-none w-80"
                />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map(user => (
                    <div
                        key={user.id}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.03] transform transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
                        <p className="text-gray-600 mt-1">{user.email}</p>
                        <p className="text-gray-500 text-sm mt-2">🏙️ {user.address.city}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
