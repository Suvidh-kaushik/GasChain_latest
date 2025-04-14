
import jwt from "jsonwebtoken";

export default function generateToken(address: String, role: String): String{
    const token = jwt.sign({address, role}, process.env.JWT_SECRET, {expiresIn: "2 days"})
    return token;
}