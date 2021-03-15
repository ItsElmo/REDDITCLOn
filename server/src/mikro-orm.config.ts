import { Post } from './entities/Post';
import { __Prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'redditClon',
  type: 'postgresql',
  debug: !__Prod__,
} as Parameters<typeof MikroORM.init>[0];
