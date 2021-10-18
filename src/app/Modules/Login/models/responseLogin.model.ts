import { User } from "./User.model";

export interface responseLogin {
    accessToken: string;
    user:User;
}