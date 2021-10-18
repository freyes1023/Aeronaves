import { User } from "@interfaces/User.model";
export interface responseLogin {
    accessToken: string;
    user:User;
}