import type { APIRoute } from "astro";


export const post: APIRoute = async ({cookies}) => {
  try {
    // unset cookies
    cookies.delete('token', {
      path: "/",
    });

    return new Response(
      JSON.stringify({
        message: "You're logged out!",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.debug(error);

    return new Response(
      JSON.stringify({
        message: "Logout failed",
      }),
      {
        status: 500,
      }
    );
  }
};
