import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    const { method, url } = context.switchToHttp().getRequest<Request>();

    console.log(`Request: ${method} ${url}`);

    return next
      .handle()
      .pipe(tap(() => console.log(`Response: ${method} ${url}`)));
  }
}
