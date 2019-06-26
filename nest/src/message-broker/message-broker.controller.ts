import { Controller, UseInterceptors, UsePipes } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { MessageBrokerInterceptor } from './message-broker.interceptor';
import { MessageBrokerPipe } from './message-broker.pipe';

@Controller('message-broker')
@UseInterceptors(MessageBrokerInterceptor)
@UsePipes(new MessageBrokerPipe())
export class MessageBrokerController {
  @EventPattern()
  async handler(data) {
    console.log('\nMessageBrokerController');
    console.log(data);
  }
}
