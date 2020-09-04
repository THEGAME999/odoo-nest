import { Module ,HttpModule  } from '@nestjs/common';
import { OdooController } from './odoo.controller';
import { OdooService } from './odoo.service';

@Module({
  imports: [HttpModule],
  controllers: [OdooController],
  providers: [OdooService]
})
export class OdooModule {}
