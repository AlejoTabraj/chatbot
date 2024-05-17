import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ZohoApiService {
  private http: AxiosInstance;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    this.http = axios.create();
  }

  async findOne(ruc: number) {
    try {
      let token = await this.cacheManager.get('AUTH_TOKEN');
      if (!token) {
        await this.generateAuthToken();
        token = await this.cacheManager.get('AUTH_TOKEN');
      }
      const res = await this.http.get(
        `https://sandbox.zohoapis.com/crm/v6/Accounts/search?criteria=Num_de_documento:equals:${ruc}`,
        {
          headers: {
            Authorization: 'Zoho-oauthtoken ' + token,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      if (res.data && res.data.data && res.data.data.length > 0) {
        return res.data.data[0];
      } else {
        throw new Error('No se encontraron datos');
      }
    } catch (error) {
      throw new Error('Error al buscar en Zoho API: ' + error.message);
    }
  }

  async generateAuthToken() {
    console.log('Estoy generando el token');
    const {
      data: { access_token },
    } = await this.http.post(
      'https://accounts.zoho.com/oauth/v2/token',
      {},
      {
        params: {
          refresh_token: process.env.REFRESH_TOKEN,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'refresh_token',
        },
      },
    );
    this.cacheManager.set('AUTH_TOKEN', access_token, 1000 * 50);
  }
}
