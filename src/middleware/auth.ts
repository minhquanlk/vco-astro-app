// middleware to create a protected route
import {jwtVerify} from 'jose';
import type { MiddlewareHandler } from "astro";

const secret = new TextEncoder().encode(import.meta.env.JWT_SECRET_KEY);

export const auth: MiddlewareHandler = (async ({cookies, locals}, next) => {
    // get token from header
    const token = cookies.get('token')?.value;
    
    if (!token) {
        return new Response(null, {
            status: 302, 
            headers: {
                'Location': "/authentication/sign-in", 
                
            },
        });
        
       
    }
    // verify token
    try {
        // decode token
        const decoded = await jwtVerify(token, secret);
        
        locals.user = decoded.payload.user;
        // set req user = decoded user
        console.log(locals.user);
        return next(); // callback, important , o.w. we'll get stuck here only
    } catch (err) {
        return new Response(JSON.stringify({ message: 'token not valid' }), {
            status: 401,
          });
    }
});

