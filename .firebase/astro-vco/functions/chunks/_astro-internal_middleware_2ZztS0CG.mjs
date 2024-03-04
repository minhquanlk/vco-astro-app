import 'cookie';
import { jwtVerify } from 'jose';

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

const secret = new TextEncoder().encode("token");
const auth = (context, next) => {
  const token = context.cookies.get("token");
  if (!token) {
    return new Response(null, {
      status: 302,
      headers: {
        "Location": "/authentication/sign-in"
      }
    });
  }
  try {
    const decoded = jwtVerify("token", secret);
    return next();
  } catch (err) {
    return new Response(JSON.stringify({ message: "token not valid" }), {
      status: 401
    });
  }
};

const onRequest$1 = defineMiddleware(
  (context, next) => {
    if (context.url.pathname === "/crud/products" || context.url.pathname === "/api/products") {
      return auth(context, next);
    }
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest as o, sequence as s };
