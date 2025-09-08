import { AccessTokenCredentialsProvider } from '@ydbjs/auth/access-token';
import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query'
const provider = new AccessTokenCredentialsProvider({
  token: 't1.9euelZrHyZDKmprIj8yWmJ7MyY-Pju3rnpWal4mVzcubjo_IzMfNzo-LkpLl8_dvGgQ6-e8XTXdN_N3z9y9JATr57xdNd038zef1656VmpKbipXMj8jKkJqYl5GZzpKa7_zN5_XrnpWaiZ6Lmc-Nz4_HzM6MjszIlJzv_cXrnpWakpuKlcyPyMqQmpiXkZnOkpo.2djcBAaFVpC5dLmQDdaMpO3MQilumuUXqH_ZfOStG6pQxijpeAmueXJ0f03UHm5MSlm7Oi7MhCg3Ay3lCftHCg',});

const driver = new Driver('grpcs://ydb.serverless.yandexcloud.net:2135/?database=/ru-central1/b1g4l5tq0blutl5mrrcf/etnrle3o7gcuqg8aru9p', {
  credentialsProvider: provider,
});
await driver.ready();
export const sql = query(driver)

// const result = await sql`SELECT * FROM services`
// const resultDel = await sql`DELETE FROM services`
// Автоинкименция
// console.log(result)
