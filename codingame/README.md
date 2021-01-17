# Rust
```
Create new project in IntelliJ:

$ cd rust
$ cargo new <name>

Your code => <name>/src/main.rs

Run:
$ cargo run
```


# PHP
```
Create new project in IntelliJ:

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
Create new project in IntelliJ:

$ cd typescript 
$ cd ts
$ touch <name>.ts

Build js:
$ tsc

Your code => js/<name>.js

Run:
$ node --unhandled-rejections=none js/<name>.js
```

# Bash
```
Create new project:

$ cd bash
$ touch <name>.sh
$ chmod +x <name>.sh

Your code => <name>.sh

Run:
$ ./<name>.sh
```

# C++
```
Create new project in Clion:

$ cd cpp
$ mkdir <name>
$ touch <name>/main.cpp
 
Your code => cpp/<name>/cmake-build-debug$ ./main

Run:
cpp/<name>/cmake-build-debug$ ./main

```
###### File cpp/\<name>\/CMakeList.txt:
```
cmake_minimum_required(VERSION 3.17)
project(<name>)

set(CMAKE_CXX_STANDARD 14)

add_executable(<name>
        main.cpp)
```
###### Help build:
```
clion-2020.3.1/bin/cmake/linux/bin/cmake --build <path project>/codingame/cpp/<name>/cmake-build-debug --target <name> -- -j 9
```

# C 
```
Create new project in Clion:

$ cd c
$ mkdir <name>
$ touch <name>/main.c
 
Your code => c/<name>/cmake-build-debug$ ./<name>

Run:
c/<name>/cmake-build-debug$ ./main
```
###### File cpp/\<name>\/CMakeList.txt:
```
cmake_minimum_required(VERSION 3.17)
project(<name>)

set(CMAKE_CXX_STANDARD 14)

add_executable(<name>
        main.cpp)
```
###### Help build:
```
clion-2020.3.1/bin/cmake/linux/bin/cmake --build <path project>/codingame/c/<name>/cmake-build-debug --target all -- -j 9
```

# Java
```
Create new project in IntelliJ:

$ cd java
$ mkdir <name>/src
$ cd <name>/src
$ touch <name>/src/<ClassName>.java
$ cd <name>/src
$ javac <ClassName>.java # компиляция <ClassName>.class

Your code => <name>/src/<ClassName>.class

Run:
$ cd <name>/src
$ java <ClassName>
```

###### File java/\<name>/\<name>.iml
```
<?xml version="1.0" encoding="UTF-8"?>
<module type="JAVA_MODULE" version="4">
  <component name="NewModuleRootManager" inherit-compiler-output="true">
    <exclude-output />
    <content url="file://$MODULE_DIR$">
      <sourceFolder url="file://$MODULE_DIR$/src" isTestSource="false" />
    </content>
    <orderEntry type="inheritedJdk" />
    <orderEntry type="sourceFolder" forTests="false" />
  </component>
</module>
```

```

$ javac Player.java
$ java Player
```

# Testing simple ?