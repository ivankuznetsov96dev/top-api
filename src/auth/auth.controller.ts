import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ALREADY_REGISTERED_ERROR,
  USER_NOT_FOUND_ERROR,
  WRONG_PASSWORD_ERROR,
} from './auth.constants';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserModel } from './user.model';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  @ApiOperation({ summary: 'create new user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: UserModel,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ALREADY_REGISTERED_ERROR,
  })
  async register(@Body() dto: AuthDto) {
    const oldUser = await this.authService.findUser(dto.login);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }
    return this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  @ApiOperation({ summary: 'login user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: USER_NOT_FOUND_ERROR,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: WRONG_PASSWORD_ERROR,
  })
  async login(@Body() dto: AuthDto) {
    const user = await this.authService.validateUser(dto.login, dto.password);
    return this.authService.login(user.email);
  }
}
