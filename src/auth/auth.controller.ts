import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/common/dto/user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { LoginDTO } from 'src/common/dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) { }

    @Post('signup')
    signup(
        @Body()
        userDTO: UserDTO,
    ): Promise<UserEntity> {
        return this.userService.create(userDTO);
    }

    @Post('login')
    login(
        @Body()
        loginDTO: LoginDTO,
    ) {
        return this.authService.login(loginDTO);
    }
}
