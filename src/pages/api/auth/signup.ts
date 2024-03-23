
import type { APIRoute } from "astro";
import { UserModel} from '../../models/User.js';
import * as bcrypt from 'bcrypt';

export const POST: APIRoute = async ({request}) => {
   
    let svData;
    let formData;
    const object = (await request.formData());
    const entries = object.entries();
  
    for (var pair of entries)
    {
      
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
      console.log('password');
      return new Response(JSON.stringify({
        message: "Password and Confirm Password do not match",
        }),
        { status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    };
    // if (password !== confirmPassword) {
    //   console.log('password');
    //   cookies.set('error',"Password and Confirm Password do not match", {
    //     httpOnly: true,
    //     path: "/",
    //     maxAge: 1,
    //   });
    //   console.log(cookies.get('error'));
    //     return new Response(null, {
    //         status: 302,
    //         headers: {
    //           "Location": "/authentication/sign-up",
    //           "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "X-Requested-With",
    //         }
    //       });
    // }
    
    let user = await UserModel.findOne({ email });

    if (user) {
      console.log('email');
      return new Response(JSON.stringify({
        message: "Email already exists",
        }),
        { status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // if (user) {
    //     cookies.set('error',"Email already exists", {
    //       httpOnly: true,
    //       path: "/",
    //       maxAge: 60 * 5,
    //     });
    //     return new Response(null, {
    //       status: 302,
    //       headers: {
    //         "Location": "/authentication/sign-up"
    //       }
    //       });
    //   }
    user = new UserModel({
      fname,
      lname,
      email,
      password,
      avatar,
      phone: '',
      school_company: '',
      position: '',
      city: '',
      role,
      joinClass: [],
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // wait till user gets saved
    await user.save();
    return new Response(JSON.stringify({message: "Signup successful. Redirecting to sign-in..."}), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
                        
    });
   
};

