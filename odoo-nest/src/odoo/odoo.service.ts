import { Injectable , HttpService , Headers } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class OdooService {
    constructor(private http: HttpService){

    }
    
    respData : any[];
    url :string = 'http://localhost:8039';
    database :string = 'Odoov13';
    user_id :string = '2';
    password : string = 'admin';

    getPartners(){
        const headersRequest = {
            'Content-Type': 'application/json'
        };
        var pram = {
            service : "object",
            method : "execute",
            args : [
                this.database,
                this.user_id,
                this.password,
                "res.partner",
                "search_read",
                [],
                ["id","name","phone","email"]
            ]
        }
        var data = {
            jsonrpc: "2.0",
            method: "call",
            params : pram,
        }
        var result = this.http.post(this.url+'/jsonrpc',JSON.stringify(data),{ headers: headersRequest })
            .pipe(
                map(response => response.data)
            );
        return result;
            
    }

    updatePartner(partnerID){
        partnerID = Number(partnerID);
        const headersRequest = {
            'Content-Type': 'application/json'
        };
        var pram = {
            service : "object",
            method : "execute",
            args : [
                this.database,
                this.user_id,
                this.password,
                "res.partner",
                "write",
                [partnerID],
                {comment:' Hello From NestJS'}
            ]
        }
        var data = {
            jsonrpc: "2.0",
            method: "call",
            params : pram,
        }
        var result = this.http.post(this.url+'/jsonrpc',JSON.stringify(data),{ headers: headersRequest })
            .pipe(
                map(response => response.data)
            );
        return result;
    }
}
