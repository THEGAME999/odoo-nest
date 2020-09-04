import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OdooModule } from './odoo/odoo.module';

@Module({
  imports: [OdooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
