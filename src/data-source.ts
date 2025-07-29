import "reflect-metadata"
import { DataSource } from "typeorm"
import { Service } from "./entity/service"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sql",
    synchronize: true,
    logging: true,
    entities: [Service],
    subscribers: [],
    migrations: []
})