# Table of Contents


# 2/17/2025
- Got aliases working (see the chain in `tsconfig.app.json`)
  - Also required changes to `eslint.config.js` and installing...
  - `eslint-import-resolver-typescript` to support this operation
  - `vite-tsconfig-paths` and added it to `vite.config.ts`. This automates the alias transfer from `tsconfig.app.json` making life easier.
- Want to have the auto includes when referencing objects to use the alias vs relative path.
  - As it stands right now, VSCode will automatically use relative paths
  - I would like it to use the alias (if it exists)