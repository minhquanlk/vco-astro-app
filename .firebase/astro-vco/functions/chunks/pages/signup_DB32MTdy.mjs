import { UserModel } from './User_B0hU9kXj.mjs';
import * as bcrypt from 'bcrypt';

const POST = async ({ request }) => {
  let svData;
  let formData;
  const object = await request.formData();
  const entries = object.entries();
  for (var pair of entries) {
    svData = JSON.parse(pair[0]);
    formData = Object.keys(svData)[0];
  }
  formData = JSON.parse(formData);
  const fname = formData.fname;
  const lname = formData.lname;
  const email = formData.email;
  const password = formData.password;
  const avatar = "user.png";
  const role = "user";
  const confirmPassword = formData.confirmPassword;
  if (password !== confirmPassword) {
    console.log("password");
    return new Response(
      JSON.stringify({
        message: "Password and Confirm Password do not match"
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  let user = await UserModel.findOne({ email });
  if (user) {
    console.log("email");
    return new Response(
      JSON.stringify({
        message: "Email already exists"
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  user = new UserModel({
    fname,
    lname,
    email,
    password,
    avatar,
    phone: "",
    school_company: "",
    position: "",
    city: "",
    role,
    joinClass: []
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();
  return new Response(JSON.stringify({ message: "Signup successful. Redirecting to sign-in..." }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { POST };
