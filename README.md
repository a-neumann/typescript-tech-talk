# Awesome TypeScript

## Setup

Typescript Compiler via npm installieren:

`npm i typescript --save-dev`

Oder global (wenn von deiner IDE benötigt):

`npm i -g typescript`

## Zu JavaScript transpilieren

Per CLI (global installiert) oder npm-Script (lokales TS)

minimal
```shell
tsc file.ts
```

mit [complier options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
```shell
tsc --target ES5 --module commonjs file.ts
```

oder einfach die *tsconfig.json* Datei verwenden
```shell
tsc -p .
```

## Workflow

Es gibt eine **watch** option. Aber es gibt auch *gulp* und *webpack* 😉

Webpack: [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader)

Browserify: [tsify](https://github.com/TypeStrong/tsify)

Gulp: [gulp-typescript](https://github.com/ivogabe/gulp-typescript)

Grunt: [grunt-ts](https://github.com/TypeStrong/grunt-ts)

Unterstützte IDEs und Editoren:

- Atom
- Eclipse
- Emacs
- NetBeans
- Sublime Text
- Vim / NeoVim
- Visual Studio 2013/2015
- Visual Studio Code
- Webstorm / PhpStorm

Typdefinitionen gibt es über den Typescript npm Bot:
https://www.npmjs.com/~types

Beispiel:

`npm i @types/cheerio --save-dev`

### Linting

Es gibt [tslint](https://palantir.github.io/tslint/), ein Erstaz für ESLint der auch manche ESLint-Regeln importieren kann

## Features

### Sprachfeatures

Mit der Option *target* lassen sich Polyfills für Language-Features und JS-API Features ausgeben.

Mögliche targets:

- ES3
- ES5
- ES6
- ES2015
- ES2016
- ES2017
- ESNext

### Polyfills

Polyfills für API-Features wie die der DOM-API oder der allgemeinen JS-API können mit der *lib* Option bereitgestellt werden.

Der TypeScript Language-Service ist intelligant genug zu erkennen, wann eine JS-API aufgerufen wird, die im aktuellen *target* nicht unterstüzt wird.
Wenn bereits Typdefinitionen für einen anderen Polyfill geladen sind, wird das natürlich auch erkannt und die Warnmeldung würde verschwinden.

### Modulsysteme

- None `require("dependency"); module.exports = ...`
- CommonJS `require("dependency"); module.exports = ...`
- AMD `define("dependency", function(dependency) { ... });`
- System `SystemJS.import('dependency.js');`
- UMD (CommonJS, AMD, oder SystemJS Syntax)
- ES6 `import dependency from "dependency"; export ...`
- ES2015 `import dependency from "dependency"; export ...`

Das Modulsystem lässt sich über die *module* Option steuern.
Mit der *baseUrl* Option lassen sich nicht-relative Importe auflösen.

### SouceMaps

Breakpoints sind für das Debuggen von transpiliertem Code fast unverzichtbar.

Mit der Option *sourceMap* lassen sich SourceMaps beim compilen erstellen.

### JSX

**react** und **react-native**

Mit der Option *jsxFactory* kann auch eine andere Factory als `React.createElement` verwendet werde. Wie z.B. `h` für Cycle.js

### Ausgabe von .d.ts Typdeklarationen

Wer eine JS-Library schreiben möchte und Typings bereitstellen will, kann die Optionen *declaration* und *declarationDir* nutzen.

## Literatur

[Typescript Seite](https://www.typescriptlang.org/docs/handbook/basic-types.html)

["Awesome Typescript" Repository von Ellen Brock](https://ellerbrock.github.io/awesome-typescript/)

["TypeScript Deep Dive" von Basarat Ali Syed](https://basarat.gitbooks.io/typescript/)

[Blog von Marius Schulz, Serie über Typescript](https://blog.mariusschulz.com/2016/09/27/typescript-2-0-non-nullable-types)