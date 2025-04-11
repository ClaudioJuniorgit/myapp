import { EntitySchema } from 'typeorm';

export const User = new EntitySchema({
  name: 'users',
  tableName: 'users',
  columns: {
    id: { type: 'integer', primary: true, generated: true },

    name: { type: 'varchar' },

    age: { type: 'integer' },
  },
});
