module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: ['src/http/entities/**/*.ts'],
  migrations: ['src/database/migration/**/*.ts'],
  subscribers: ['src/database/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/http/models',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },
};
