import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';

@Module({
  imports: [PrismaModule, NoteModule],
  controllers: [AppController],
  providers: [AppService, NoteService],
})
export class AppModule {}
