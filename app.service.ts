import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello(ruc: number) {
    console.log(process.env.TOKEN);
    const res = await axios.get(
      `https://sandbox.zohoapis.com/crm/v6/Accounts/search?criteria=Num_de_documento:equals:${ruc}`,
      {
        headers: {
          Authorization: 'Zoho-oauthtoken ' + process.env.TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded',
          Connection: 'keep-alive',
        },
      },
    );
    return res.data.data[0];
  }
}
