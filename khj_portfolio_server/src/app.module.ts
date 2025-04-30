import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'khj_feedback', // DB 이름
      synchronize: true, // 개발 환경에서만 true (자동 테이블 생성)
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 전체 엔티티 등록
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
