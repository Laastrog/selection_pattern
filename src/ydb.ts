import { AccessTokenCredentialsProvider } from '@ydbjs/auth/access-token';
import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query'
const provider = new AccessTokenCredentialsProvider({
  token: 't1.9euelZqOzYmZkJWcmZCczpuJzZCUiu3rnpWal4mVzcubjo_IzMfNzo-LkpLl8_cCajI6-e9NZmV4_t3z90IYMDr5701mZXj-zef1656VmpHJm86bk5zJksqXzJnHlI2d7_zN5_XrnpWaiZ6Lmc-Nz4_HzM6MjszIlJzv_cXrnpWakcmbzpuTnMmSypfMmceUjZ0.kh00ZHdDslSQpGVPCXzG40QZNaJXczluQLY7RMdtIRXV26Uv4L2-d2OLiKfrb4KKFsBTqOGXm4GQpHQSkJIFCg',});

const driver = new Driver('grpcs://ydb.serverless.yandexcloud.net:2135/?database=/ru-central1/b1g4l5tq0blutl5mrrcf/etnrle3o7gcuqg8aru9p', {
  credentialsProvider: provider,
});
await driver.ready();
export const sql = query(driver)

// const result = await sql`SELECT * FROM services`
// const resultDel = await sql`DELETE FROM services`
// Автоинкименция
// console.log(result)
