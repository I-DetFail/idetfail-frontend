import cookies from "next-cookies";

export function checkIfAlreadyAuthorized(context) {
  return new Promise((resolve) => {
    const allNextCookies = cookies(context);

    if (allNextCookies.loginStatus) {
      return context.res
        .writeHead(302, {
          Location: "/",
        })
        .end();
    }

    return resolve("unAuthorized");
  });
}

export function checkIfNotAuthorized(context) {
  return new Promise((resolve) => {
    const allNextCookies = cookies(context);

    if (!allNextCookies.loginStatus) {
      return context.res
        .writeHead(302, {
          Location: "/login",
        })
        .end();
    }

    return resolve({
      loginStatus: allNextCookies.loginStatus,
    });
  });
}
