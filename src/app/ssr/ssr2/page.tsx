import UserClient from "./userclient";

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}

export default async function Page() {
    const users = await getUsers();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
            <div className="max-w-5xl mx-auto mt-20">
                <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
                    👥 Users Page (SSR + Client Filter)
                </h1>
                <UserClient users={users} />
            </div>
        </div>
    );
}
