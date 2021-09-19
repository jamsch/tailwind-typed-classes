# typed-tailwind-classes

Typesafe tailwind classes for use in TypeScript projects

## Installation

```sh
npm install --save @jamsch/typed-tailwind-classes
```

## Usage

```ts
import type {TailwindClass} from '@jamsch/typed-tailwind-classes';

const blueBg: TailwindClass = 'bg-blue-500'; // OK

const extraBlueBg: TailwindClass = 'bg-blue-5000'; // Error!
```

Use the helper (powered by `clsx`, a tiny classname library) to construct your classes

```ts
import {tw} from '@jamsch/typed-tailwind-classes';

const condition = false;

const classes = tw('bg-blue-500', 'md:border-2', condition && 'translate-x-10', {
  'md:opacity-50': true,
  'lg:opacity-100': condition
});

console.log(classes); // "bg-blue-500 md:border-2 md:opacity-50"
```
