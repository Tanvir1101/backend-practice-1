import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  getAbout(): string {
    return this.aboutService.getAbout();
  }

  @Get('siam')
  getAboutSiam(): string {
    return this.aboutService.getAboutSiam();
  }
}
