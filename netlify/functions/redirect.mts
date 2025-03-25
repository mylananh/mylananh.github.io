import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    console.log(req.method);
    if (req.method.toUpperCase() !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }
    const params = await req.formData();
    const token = params.get("token");
    return new Response("Redirecting...", {
        status: 302,
        headers: {
            "Set-Cookie": `test_testauth_token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=Fri, 10 Oct 2025 00:00:00 GMT;`,
            "Location": `https://classy-brioche-924f5d.netlify.app?token=${token}`,
            //"Access-Control-Allow-Origin": "*", // Allow all origins (CORS),
            "Access-Control-Allow-Methods": "GET,POST",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}
