import { sequence, defineMiddleware } from "astro/middleware";
import {auth} from "./auth";
import { connectToDB } from "../config/db";


export const onRequest = defineMiddleware((context, next) => {
    if (!context.url.pathname.includes('/') ) {
        return context.redirect('/');
    }
    return next();
    // else {
    //     if (context.cookies.get('token'))
    //         return context.redirect('/');
      
    //     return next();
    // }
    
   
    // if (context.url.pathname.includes('/authentication')) {
    //     if (context.url.pathname.includes('/api/auth')) {
     
    //         context.request.headers.set("Access-Control-Allow-Origin", "*");
    //         context.request.headers.set("Access-Control-Allow-Headers", "X-Requested-With");
    //         return next();
    //     }
    //     return auth(context, next);
    // }
    
    // else {
    //     if (context.cookies.get('token'))
    //         return context.redirect('/');
      
    //     return next();
    // }
   
   
},
);