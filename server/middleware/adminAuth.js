import dotenv from "dotenv"
dotenv.config()
export default function adminAuth() {
  return async (req, res, next) => {
    if (!req.headers.authorization) {
      response.status(401)
      response.end()
      return
    }

    if (req.headers.authorization === "Bearer " + process.env.ADMIN_SECRET) {
      next()
    } else {
      res.status(401).send({ error: "Unauthorized: Provide the right admin authorization" })
    }
  }
}
