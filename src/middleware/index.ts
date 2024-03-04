import { sequence, defineMiddleware } from "astro/middleware";
import {auth} from "./auth";

export const onRequest = defineMiddleware((context, next) => {
    if (context.url.pathname === '/crud/products' || context.url.pathname === '/api/products') {
        return auth(context, next);
        
        
    }
    return next();
},
);