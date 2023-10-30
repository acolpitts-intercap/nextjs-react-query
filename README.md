This is a [Next.js](https://nextjs.org/) POC that demonstraights best practises for leveraging React Query v5 for remote state management.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

All source code is located inside the `./app` folder.

`_components`: React components. Note: `_` instructs Next.js App Router to ignore this folder (Private Folder)

`_utils`: React utils/helpers. Also ignored by Next.js App Router as it's marked private with the `_`

`hydration-stream-suspense`: Example page loading data on the client using expiremental ReactQueryStreamedHydration. This is the recommended approach when you do not care about SEO

`hydration`: Example page prefetching data on the server using hydration. This is the recommended approach when need SSR to boost SEO.

`initial-data`: Example page prefetching data on the server using props. Note: this approach is not recommended by the React Query team, and you should always aim to use the hydration and dehydration method for better performance and reliability.
