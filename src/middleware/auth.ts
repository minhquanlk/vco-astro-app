// middleware to create a protected route
import {jwtVerify} from 'jose';
import type { MiddlewareHandler } from "astro";

const secret = new TextEncoder().encode('token');

export const auth: MiddlewareHandler = ((context, next) => {
    // get token from header
    const token = context.cookies.get('token');
    
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
        const decoded = jwtVerify('token', secret);
        
        // set req user = decoded user
        
        return next(); // callback, important , o.w. we'll get stuck here only
    } catch (err) {
        return new Response(JSON.stringify({ message: 'token not valid' }), {
            status: 401,
          });
    }
});

