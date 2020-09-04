import { Controller ,Get, Param, Post, Body} from '@nestjs/common';
import {OdooService} from './odoo.service';

@Controller('partner')
export class OdooController {
    constructor(private odooService: OdooService) { }
    

    @Get()
    async getPartners() {
        const partners = await this.odooService.getPartners();
        return partners;
    }

    @Get(':partnerID')
    async updatePartner(@Param('partnerID') partnerID) {
        const partners = await this.odooService.updatePartner(partnerID);
        return partners;
    }
}
