import { sql } from '@vercel/postgres';
import { BuildQueryResult, DBQueryConfig, ExtractTablesWithRelations } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';

declare global {
    var db: PostgresJsDatabase<typeof schema> | undefined;
}

const db = drizzle(sql, { schema });

export { db };

type Schema = typeof schema;
type TSchema = ExtractTablesWithRelations<Schema>;

type IncludeRelation<TableName extends keyof TSchema> = DBQueryConfig<
    'one' | 'many',
    boolean,
    TSchema,
    TSchema[TableName]
>['with'];

export type InferResultType<
    TableName extends keyof TSchema,
    With extends IncludeRelation<TableName> | undefined = undefined
> = BuildQueryResult<TSchema, TSchema[TableName], { with: With }>;
