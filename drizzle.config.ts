import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
dotenv.config();

export default {
    schema: './server/database/schema',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL!
    }
} satisfies Config;
