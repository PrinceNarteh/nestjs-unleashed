import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'nestjs_unleashed',
  entities: ['dist/domain/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});
