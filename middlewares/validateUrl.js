import { URL } from "url";

export const validateUrl = (req, res, next) => {
  try {
    const { origin } = req.body;
    const urlFrontend = new URL(origin);
    if (urlFrontend.origin !== "null") {
      return next();
    } else {
      throw new Error("invalid");
    }
  } catch (error) {
    return res.send("invalid URL");
  }
};
