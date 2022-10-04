import cookies from "next-cookies";

export async function checkIfAlreadyAuthorized(context) {
  const result = await fetch("http://108.136.40.55/api/user/profile", {
    headers: {
      Accept: "application/json",
    },
  });
  const resultJson = await result.json();

  if (resultJson.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // return new Promise((resolve) => {
  //   const allNextCookies = cookies(context);

  //   // if (allNextCookies.loginStatus) {
  //   //   return context.res
  //   //     .writeHead(302, {
  //   //       Location: "/",
  //   //     })
  //   //     .end();
  //   // }

  //   return resolve("unAuthorized");
  // });
}

export async function checkIfNotAuthorized(context) {
  const result = await fetch("http://108.136.40.55/api/user/profile", {
    headers: {
      Accept: "application/json",
    },
  });
  const resultJson = await result.json();

  if (resultJson.success === false) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // return new Promise((resolve) => {
  //   const allNextCookies = cookies(context);

  //   if (!allNextCookies.loginStatus) {
  //     return context.res
  //       .writeHead(302, {
  //         Location: "/login",
  //       })
  //       .end();
  //   }

  //   return resolve({
  //     loginStatus: allNextCookies.loginStatus,
  //   });
  // });
}
