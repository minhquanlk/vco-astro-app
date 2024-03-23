import { nanoid } from 'nanoid';
import { SignJWT } from 'jose';
import { UserModel } from './User_B0hU9kXj.mjs';
import * as bcrypt from 'bcrypt';

const secret = new TextEncoder().encode({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://courses.vcogroup.vn", "ASSETS_PREFIX": undefined}.JWT_SECRET_KEY);
const POST = async (context) => {
  let svData;
  let formData;
  const object = await context.request.formData();
  const entries = object.entries();
  for (var pair of entries) {
    svData = JSON.parse(pair[0]);
    formData = Object.keys(svData)[0];
  }
  formData = JSON.parse(formData);
  const email = formData.email;
  const password = formData.password;
  if (!email || !password) {
    return new Response(JSON.stringify({ message: "Email and password are required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({
          message: "Invalid credentials"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return new Response(
        JSON.stringify({
          message: "Invalid credentials"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const payload = {
      user: {
        id: user._id,
        name: user.fname + " " + user.lname,
        email: user.email,
        avt: user.avatar
      }
    };
    const token = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setJti(nanoid()).setIssuedAt().setExpirationTime("180m").sign(secret);
    context.cookies.set("token", token, {
      path: "/",
      maxAge: 60 * 60 * 3
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
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

export { POST };
