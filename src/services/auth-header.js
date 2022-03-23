export default function authHeader() {
    const accsstkn = JSON.parse(localStorage.getItem("accsstkn"));

    return accsstkn ? { Authorization: accsstkn } : {};
}