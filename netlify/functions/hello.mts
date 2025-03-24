import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const r = new Response("hello from netlify", {
        status: 200,
        headers: {
"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allow all origins (CORS),
            "Access-Control-Allow-Methods": "GET,POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Set-Cookie": "test_test_test=TEST; Domain=classy-brioche-924f5d.netlify.app; Secure; HttpOnly; Expires=Fri, 10 Oct 2025 00:00:00 GMT; Path=/", 
        }
    });
    return r;
}
