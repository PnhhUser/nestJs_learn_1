import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDTO {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsString()
    @IsNotEmpty()
    username: string;
}