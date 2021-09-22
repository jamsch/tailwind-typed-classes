# typed-tailwind-classes

Typesafe tailwind classes for use in TypeScript projects

## Prerequisites

- Typescript >4.1

## Installation

```sh
npm install --save @jamsch/typed-tailwind-classes
```

## Usage

```ts
import type { TailwindClass } from '@jamsch/typed-tailwind-classes';

const blueBg: TailwindClass = 'bg-blue-500'; // OK

const extraBlueBg: TailwindClass = 'bg-blue-5000'; // Error!
```

Use the `tw(...)` helper to construct your class strings. One major difference with this helper (in comparison to `classnames` & `clsx`) is that modifiers (i.e. `md:xxx`, `focus:xxx`) are built using object syntax, as listed below:

```ts
import { tw } from '@jamsch/typed-tailwind-classes';

const condition = false;

const classes = tw(
  'bg-blue-500',
  'border-2',
  // Conditions
  condition && 'translate-x-10',
  !condition && 'translate-y-10',
  {
    // Format: [class name]: [boolean]
    'opacity-50': true,
    'animate-bounce': false,
    // Format: [modifier]: [class name]
    hover: 'border-4',
    'md:hover': 'opacity-100',
    // Format: [modifier]: ([class name]|false|undefined)[]
    'xs:hover': ['bg-blue-50', 'border-0', condition && 'animate-bounce'],
    'md:dark:focus': ['bg-red-100', 'animate-pulse'],
  },
);

console.log(classes);
// "bg-blue-500 border-2 translate-y-10 opacity-50 hover:border-4 md:hover:opacity-100 xs:hover:bg-blue-50 xs:hover:border-0 md:dark:focus:bg-red-100 md:dark:focus:animate-pulse"
```

## Purge config

In order to avoid purging state modifiers that use the `tw(...)` function (e.g. `tw({ "md:hover": "bg-blue-50" })`), you'll need to modify your Tailwind's purge config to add in a `transformer` function for the files that use `tw(...)`.

```js
// tailwind.config.js

// @ts-check

/**
 * @param {string} content
 * @returns {string}
 */
const transformer = (content) => {
  // match content against the "tw(...)" function
  const twFunctionRegex = /tw\(([^)]+)\)/g;

  return content.replace(twFunctionRegex, (match, p1) => {
    // flatten any "{ [key]: string[] }" in tw(...) including newlines and append the object keys to each item in the array
    return (
      p1
        .replace(/\n/g, '')
        // Match `[modifier]: ["item_one", "item_two"]`
        .replace(/([^\s]+):\s*?\[([^\]]+)\]/g, (match, modifierKey, stringValues) => {
          // modifierKey = "md" | `"md:hover"` | "`sm:focus`", etc
          // remove all quotes from key
          const modifier = modifierKey.replace(/["']/g, '');

          // prepend modifier with each value in the array
          // e.g. `"hello", "world"` => `"hover:hello", "hover:world"`
          const modifierWithValue = stringValues.replace(/["']([^\s]+)["']/g, `"${modifier}:$1"`);

          return modifierWithValue;
        })
        // Match `[Object key]: \"string_value\"`
        .replace(/([^\s]+):\s*?"([^\"]+)"/g, (match, key, value) => {
          const modifier = key.replace(/["']/g, '');
          return `"${modifier}:${value}"`;
        })
        // Flatten the object
        .replace(/[\{\}]/g, '')
    );
  });
};

// Install @types/tailwindcss for the below "@type" annotation to work correctly

/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: {
    // location to your files
    content: ['./components/**/*.{tsx,ts}', './pages/**/*.{tsx,ts}'],
    transform: {
      tsx: transformer,
      ts: transformer,
      // NOTE: place any extra file extensions here
    },
  },
};
```
