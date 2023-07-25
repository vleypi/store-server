import { Body, Controller, HttpCode,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthDto } from './dto/create-auth.dto';
import { RefreshTokenDto } from './dto/refresh-toke.dto';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto){
    return this.authService.login(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('login/accesss-token')
  async getNewToken(@Body() dto: RefreshTokenDto){
    return this.authService.getNewTokens(dto.refreshToken)
  }
}
