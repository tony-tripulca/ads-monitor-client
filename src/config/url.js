class URL {
  static base() {
    let env = process.env.REACT_APP_ENV;

    if (env === "dev") {
      return "/";
    } else if (env === "uat") {
      return "/";
    } else if (env === "prod") {
      return "/";
    }

    return "/";
  }

  static api() {
    let env = process.env.REACT_APP_ENV;

    if (env === "dev") {
      return "http://localhost:1337";
    } else if (env === "uat") {
      return "/server";
    } else if (env === "prod") {
      return "/server";
    }

    return "http://localhost:1337";
  }
}

export default URL;
