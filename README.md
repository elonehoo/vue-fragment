# vue fragment

Return multiple root elements.

```vue
<script setup>
import { Fragment } from '@elonehoo/vue-fragment'
</script>

<template>
  <fragment> <!-- This root element will not exist in the DOM -->
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
  </fragment>
</template>
```

## Features

- **✅ Multiple root nodes** Without creating a functional component!
- **🔥 SSR** Unwraps the root element on client-side post-hydration!
- **⚡️ Directives** Supports `v-if`, `v-for`, and `v-html`!
- **👩‍🔬 Battle-tested** Checkout the tests [here](/test/)!

## Install

```bash
# npm
npm install --save-dev @elonehoo/vue-fragment
# yarn
yarn add --dev @elonehoo/vue-fragment
# pnpm
pnpm install --save-dev @elonehoo/vue-fragment
```

## Quick Start

###  Components

```vue
<script setup>
import { Fragment } from '@elonehoo/vue-fragment'
</script>

<template>
    <fragment>
        Hello world!
    </fragment>
</template>
```

### Directive

```vue
<template>
    <div v-frag>
        Hello world!
    </div>
</template>

<script>
import frag from 'vue-frag'

export default {
    directives: {
        frag
    }
}
</script>
```


