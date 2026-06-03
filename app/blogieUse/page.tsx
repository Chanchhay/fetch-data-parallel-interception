import GetUserList from "./GetUser";

async function getAllUsers() {
    const data = await fetch("https://api.escuelajs.co/api/v1/users");
    const res = await data.json();
    return res;
}

export default function Page() {
    return (
        <div>
            <GetUserList users={getAllUsers()} />
        </div>
    );
}
