"use client";

import { useEffect, useState } from "react";

type User = {
    id: number;
    email: string;
    password: string;
};

export default function PageTest() {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        const fetchBlogData = async () => {
            const data = await fetch("https://api.escuelajs.co/api/v1/users");
            const users = await data.json();
            setUsers(users);
        };

        fetchBlogData();
    }, []);

    return (
        <div>
            {users?.map((user) => (
                <div key={user.id}>
                    <h1>id: {user.id}</h1>
                    <h1>email: {user.email}</h1>
                    <h1>name: {user.password}</h1>
                </div>
            ))}
        </div>
    );
}
