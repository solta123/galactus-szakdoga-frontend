import { createCookie } from "@remix-run/node";

export const cookie = createCookie("galactusCredentials", {
    maxAge: 36_000,
    httpOnly: true,
    // secure: true,
    // sameSite: 'none',
    path: '/'
});
