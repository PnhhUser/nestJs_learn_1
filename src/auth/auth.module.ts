import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { authConstant } from 'src/common/constants/authConstant';
import { UserModule } from 'src/user/user.module';
import { JWTStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
    imports: [UserModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                return {
                    secret: configService.get<string>('secret'),
                    // secret: 'HAD_12X#@',
                    signOptions: {
                        expiresIn: "1d"
                    }
                }
            },
            inject: [ConfigService]
        })],

    providers: [AuthService, JWTStrategy],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule { }
