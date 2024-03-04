const post = async ({ cookies }) => {
  try {
    cookies.delete("token", {
      path: "/"
    });
    return new Response(
      JSON.stringify({
        message: "You're logged out!"
      }),
      {
        status: 200
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

export { post };
