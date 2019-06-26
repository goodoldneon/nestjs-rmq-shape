import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class MessageBrokerPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
