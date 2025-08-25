import { AccessTokenCredentialsProvider } from '@ydbjs/auth/access-token';
import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query'
const provider = new AccessTokenCredentialsProvider({
  token: 't1.9euelZqLloqOlI2Rm5KWyZnOm4uUxu3rnpWal4mVzcubjo_IzMfNzo-LkpLl8_dZI046-e9XAQpB_t3z9xlSSzr571cBCkH-zef1656VmsabmpSZj5jPm8qQkZvLy5iR7_zN5_XrnpWaiZ6Lmc-Nz4_HzM6MjszIlJzv_cXrnpWaxpualJmPmM-bypCRm8vLmJE.vOezkF_cPVX6u8N1R8M30NALD6CX5OBFHb_uQcbpLYmJ5BligTmzhFVRzPJEtI7wFrr-09lz_2O6sVp8-lsmBg',});

const driver = new Driver('grpcs://ydb.serverless.yandexcloud.net:2135/?database=/ru-central1/b1g4l5tq0blutl5mrrcf/etnrle3o7gcuqg8aru9p', {
  credentialsProvider: provider,
});
await driver.ready();
export const sql = query(driver)

const result = await sql`SELECT * FROM services`
// const resultDel = await sql`DELETE FROM services`
// Автоинкименция
console.log(result)
