import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGaurd } from 'src/auth/jwt.guard';


@Controller('profile')
@ApiTags("profile")
export class ProfileController {
    constructor() { }

    @Get()
    @UseGuards(JwtAuthGaurd)
    profile(@Req() request: Request) {
        return request.user;
    }


}
