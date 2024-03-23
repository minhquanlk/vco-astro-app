import 'cookie';
import 'mongoose';
import dotenv from 'dotenv';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

new TextEncoder().encode({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://courses.vcogroup.vn", "ASSETS_PREFIX": undefined}.JWT_SECRET_KEY);

dotenv.config();
process.env.MONGO_URI;

const onRequest$1 = defineMiddleware(
  (context, next) => {
    if (!context.url.pathname.includes("/")) {
      return context.redirect("/");
    }
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest as o, sequence as s };
