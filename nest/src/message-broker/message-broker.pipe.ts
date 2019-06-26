import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MessageBrokerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('\nMessageBrokerPipe');

    /* True */
    console.log(value === undefined);

    return value;
  }
}
