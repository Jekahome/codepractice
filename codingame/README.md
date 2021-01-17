# Rust
```
Create new project:

$ cd rust
$ cargo new <name>

Your code => <name>/src/main.rs

Run:
$ cargo run
```


# PHP
```
Create new project:

$ cd php
$ mkdir <name>
$ cd <name>
$ touch index.php

Your code => <name>/index.php

Run:
$ php index.php
```

# TypeScript
```
Uses Node.js: node v14.4.0

Build development environment:

$ cd typescript 
$ npm init
$ npm install --save-dev typescript
$ npm install @types/node --save-dev
$ mkdir js
$ mkdir ts 
$ touch tsconfig.json
```
###### File ts/index.ts:
```
{
  "compileOnSave": true,
  "compilerOptions": {
    "target": "es2019",
    "esModuleInterop": true,
    "module": "commonjs",
    "removeComments": true,
    "outDir": "js",
    "rootDir": "ts",
    "types": [ "node" ],
    "typeRoots": [ "../node_modules/@types" ]
  },
  "include": [
    "ts/*",
    "ts/**/*"
  ]
}
```

```
Create new project:

$ cd typescript 
$ cd ts
$ touch <name>.ts

Build js:
$ tsc

Your code => js/<name>.js

Run:
$ node --unhandled-rejections=none js/<name>.js
```
