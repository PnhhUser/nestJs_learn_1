import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { authConstant } from 'src/common/constants/authConstant';
import { UserModule } from 'src/user/user.module';
import { JWTStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [UserModule, JwtModule.register({
        secret: authConstant.secret, signOptions: {
            expiresIn: "1d"
        }
    })],
    providers: [AuthService, JWTStrategy],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule { }
