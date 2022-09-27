# TypeScript 101: Better Workflow & tsconfig

- Initialize tsconfig
```
tsc --init
```
- Define roots in tsconfig
```
"rootDir": "./src"
"outDir": "./public"
"include": ["src"] -> To compile only ts files inside the src folder
```
- Compile
`tsc -w`
