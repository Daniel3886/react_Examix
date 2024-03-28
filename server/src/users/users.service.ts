import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { HashService } from 'src/hash/hash.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashService: HashService,
  ) {}

  getByEmail(email: User['email']) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }

  getById(id: User['id']) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async create(createUserDto: CreateUserDto) {
    const encryptedPassword = await this.hashService.hash(
      createUserDto.password,
    );

    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: encryptedPassword,
      },
    });
  }
}
