import { nanoid } from 'nanoid';
import { SignJWT } from 'jose';

const secret = new TextEncoder().encode("token");
const POST = async ({ request, cookies }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  try {
    const token = await new SignJWT({}).setProtectedHeader({ alg: "HS256" }).setJti(nanoid()).setIssuedAt().setExpirationTime("60s").sign(secret);
    cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60
      // 2 hours in seconds
    });
    console.log("set token complete");
    return new Response(
      JSON.stringify({
        message: "You're logged in!"
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.debug(error);
    return new Response(
      JSON.stringify({
        message: "Login failed"
      }),
      {
        status: 500
      }
    );
  }
};

export { POST };
