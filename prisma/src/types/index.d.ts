import { Request } from "express";

export interface User {
  id: number
  username: string
  mail: string
  phone: string
  password: string
  full_name: string
  photo: string
  institution: string
  postal_code: string
  iat: number
}

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}

