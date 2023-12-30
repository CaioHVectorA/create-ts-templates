# Prisma Integration

This template offers a three-layered architecture source code for an API with integration with Prisma ORM (prisma.io), which you can use MySQL, PostgreSQL, MongoDB, and others. It includes error handling and test support.

## Get started

- First, run `npm install` / `yarn install` / `bun install`, and change the name of your application in package.json.
- Edit the database URL, create your `.env` file based on `.env.example`.
- Run `npm run dev`.

## Coding

To shape your database schema, make changes in the `schema.prisma` file (prisma.io/docs/orm/prisma-schema). Remember to use `npx prisma migrate dev` to update your DB client.

For writing code:
- Map database actions in repositories.
- Implement business rules in services.
- Handle HTTP requests/responses in controllers.

You can use AppError(errors/AppError) to throw errors in your API responses and create custom errors for your application. If you encounter an "Internal Server Error," it means there is a problem with your code (check config/error).

To create routes, use route paths by creating a subrouter for each entity and connect it into routes/index.


## Testing

To test, run `npm(yarn, bun) test`. Feel free to add more test files and customize the testing architecture as needed. You can edit jest.config.js if desired. Pay attention to TEST_DATABASE_URL defined in .env.

Thanks!

Please prettify this markdown before sending me the code.