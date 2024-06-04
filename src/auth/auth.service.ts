import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/common/dto/login.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async login(loginDTO: LoginDTO): Promise<{ accessToken: string }> {
        const user = await this.userService.findOne(loginDTO);

        const passwordMatched = await bcrypt.compare(
            loginDTO.password,
            user.password,
        );

        if (passwordMatched) {
            delete user.password;
            const payload = {
                email: user.email,
                sub: user.id,
            };

            return {
                accessToken: this.jwtService.sign(payload),
            };
        } else {
            throw new UnauthorizedException('Password does not match'); // 5.
        }
    }



}
