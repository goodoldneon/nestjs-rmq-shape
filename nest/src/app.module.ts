import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageBrokerController } from './message-broker/message-broker.controller';

@Module({
  imports: [],
  controllers: [AppController, MessageBrokerController],
  providers: [AppService],
})
export class AppModule {}
