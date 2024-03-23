const POST = async ({ cookies }) => {
  try {
    cookies.delete("token", {
      path: "/"
    });
    return new Response(
      JSON.stringify({
        message: "You're logged out!"
      }),
      {
        status: 302,
        headers: {
          Location: "/authentication/sign-in"
        }
      }
    );
  } catch (error) {
    console.debug(error);
    return new Response(
      JSON.stringify({
        message: "Logout failed"
      }),
      {
        status: 500
      }
    );
  }
};

export { POST };
