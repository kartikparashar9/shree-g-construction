import jwt from "jsonwebtoken";

export function generateJwtToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "7d" });
}

export function verifyJwtToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
}
