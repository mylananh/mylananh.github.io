exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allow all origins (CORS),
            "Access-Control-Allow-Methods": "GET,POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Set-Cookie": "test_test_test=TEST; Domain=tiktok.com; Secure; HttpOnly; Expires=Fri, 10 Oct 2025 00:00:00 GMT; Path=/", 
        },
        body: JSON.stringify({ message: "Hello from Netlify Functions!" }),
    };
};