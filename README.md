# NxCloudApp

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
<br><br>

# How to create this application from scratch?

1. Create nx workspace

   > npx create-nx-workspace@latest
   >
   > select the **Integrated monorepo** option

2. Install the Angular schematic to create Angular application

   > npm install @nrwl/angular

3. Create a new Angular application

   > nx generate @nrwl/angular:app cloud-portal --routing
   >
   > select **SASS** for stylesheet

4. Add Layout lib

   > npx nx generate @nrwl/angular:library layout --routing --style=scss
   >
   > - CREATE libs/layout/README.md
   > - CREATE libs/layout/tsconfig.lib.json
   > - CREATE libs/layout/README.md
   > - CREATE libs/layout/tsconfig.lib.json
   > - CREATE libs/layout/tsconfig.spec.json
   > - CREATE libs/layout/src/index.ts
   > - CREATE libs/layout/src/lib/layout.module.ts
   > - CREATE libs/layout/project.json
   > - UPDATE tsconfig.base.json
   > - CREATE libs/layout/tsconfig.json
   > - CREATE libs/layout/jest.config.ts
   > - CREATE libs/layout/src/test-setup.ts
   > - CREATE libs/layout/src/lib/lib.routes.ts

5. Add navbar component to the layout lib
   > npx nx generate @nrwl/angular:component components/navbar --project=layout --export
