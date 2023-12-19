import { User } from "./user.interface";

export interface UnAuthUser extends User {
  password: string
}
