import { AccessTokenCredentialsProvider } from '@ydbjs/auth/access-token';
import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query'
const provider = new AccessTokenCredentialsProvider({
  token: 'https://yandex.cloud/ru/docs/iam/operations/iam-token/create-for-sa#before-you-begin',});

const driver = new Driver('grpcs://ydb.serverless.yandexcloud.net:2135/?database=/ru-central1/b1g4l5tq0blutl5mrrcf/etnrle3o7gcuqg8aru9p', {
  credentialsProvider: provider,
});
await driver.ready();
export const sql = query(driver)

// const result = await sql`SELECT * FROM services`
// const resultDel = await sql`DELETE FROM services`
// Автоинкименция
// console.log(result)
