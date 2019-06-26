import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MessageBrokerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('\nMessageBrokerInterceptor');

    /* True */
    console.log(context.args[0] === undefined);

    return next.handle();
  }
}
