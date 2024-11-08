import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity]),  ],
    providers: [AuthService],
    controllers: [AuthController],
})

export class AuthModule {}
