import { AccessTokenCredentialsProvider } from '@ydbjs/auth/access-token';
import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query'
const provider = new AccessTokenCredentialsProvider({
  token: 't1.9euelZrJyZ6SzY7JjYmanZSSkZDGku3rnpWal4mVzcubjo_IzMfNzo-LkpLl8_dNVkM6-e90VwIt_d3z9w0FQTr573RXAi39zef1656VmpuLnpSVk8uZj8aZyJzLypOY7_zN5_XrnpWaiZ6Lmc-Nz4_HzM6MjszIlJzv_cXrnpWam4uelJWTy5mPxpnInMvKk5g.GAdpJteG3kcsmdSeAFxsF9qIOO9cVj2ScfohQKP6tjDbU0Uzkq54mqKYR4Dm_kldO4b8ZgkFtkS5eKOEv50bCg',});

const driver = new Driver('grpcs://ydb.serverless.yandexcloud.net:2135/?database=/ru-central1/b1g4l5tq0blutl5mrrcf/etnrle3o7gcuqg8aru9p', {
  credentialsProvider: provider,
});
await driver.ready();
export const sql = query(driver)

// const result = await sql`SELECT * FROM services`
// const resultDel = await sql`DELETE FROM services`
// Автоинкименция
// console.log(result)
