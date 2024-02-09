import { Controller,Get } from '@nestjs/common';
import { SendMailService } from './send-mail.service';

@Controller('send-mail')
export class SendMailController {
    constructor(private readonly sendMailService: SendMailService){}
    @Get()
    async Send()
    {
        this.sendMailService.sendEmail();
    }
}
