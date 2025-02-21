# Table of Contents
- [Table of Contents](#table-of-contents)
- [2/20/2025](#2202025)
- [2/17/2025](#2172025)
  - [Later that day](#later-that-day)


# 2/20/2025
- The build is failing again and I cannot remember what I did to fix it. I might need to add an index file to header.
- Everything else works great and looks great so far though!

# 2/17/2025
- Got aliases working (see the chain in `tsconfig.app.json`)
  - Also required changes to `eslint.config.js` and installing...
  - `eslint-import-resolver-typescript` to support this operation
  - `vite-tsconfig-paths` and added it to `vite.config.ts`. This automates the alias transfer from `tsconfig.app.json` making life easier.
- Want to have the auto includes when referencing objects to use the alias vs relative path.
  - As it stands right now, VSCode will automatically use relative paths
  - I would like it to use the alias (if the alias exists) instead of the relative path.

## Later that day
- I got everything setup how I like it, and have started making slow progress. I am not a fan of the style currently, but we'll see.
- The build fails when trying to go to AWS or Render.com for some reason. The aliases I have setup don't seem to be working properly or playing nice once it goes to get built on another location.