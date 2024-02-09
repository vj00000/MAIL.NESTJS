import { SendMailController } from './send-mail.controller';
import { SendMailService } from './send-mail.service';
import { Module, Global } from '@nestjs/common';
@Global()
@Module({
  controllers: [SendMailController],
  providers: [SendMailService]
})
export class SendMailModule {}