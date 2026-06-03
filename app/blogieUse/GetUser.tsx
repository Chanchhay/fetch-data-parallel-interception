"use client";

import { use } from "react";

type User = {
    id: number;
    email: string;
    password: string;
};

export default function GetUserList({ users }: { users: Promise<User[]> }) {
    const allUsers = use(users);
    return (
        <div>
            {allUsers.map((usr) => (
                <div key={usr.id}>
                    <h1>user {usr.email}</h1>
                    <h1>user {usr.password}</h1>
                </div>
            ))}
        </div>
    );
}
