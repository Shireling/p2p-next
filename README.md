## Summary
Public P2P(peer-to-peer) web-app project showcasing the power of Next.js 13 along with Moov.io as the principle payment processor.


## Getting started

Set up environment variables required for application to function locally.
This app requires the use of both an .env and .env.local file to work.

.env file should include:
```
DATABASE_URL=MONGODB_DATABASE_URL
```

.env.local should include:
```
GOOGLE_CLIENT_ID=GOOGLE_CLIENT_ID_FOR_OAUTH
GOOGLE_CLIENT_SECRET=GOOGLE_CLIENT_SECRET_FOR_OAUTH
NEXTAUTH_SECRET=RANDOM_USER_CREATED_STRING
MOOV_ACCOUNT_ID=MOOV_ACCOUNT_ID
MOOV_PUBLIC_KEY=MOOV_PUBLIC_KEY
MOOV_SECRET_KEY=MOOV_SECRET_KEY
MOOV_DOMAIN='http://localhost:3000'
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
