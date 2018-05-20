## webpack-env-ts
Use custom environment configurations in front-end projects with type safety and hints.

### Motivation
[node-config-ts](https://github.com/tusharmath/node-config-ts)

### Usage
1. Install package 
    ```bash
    npm i -S @f0rr0/webpack-env-ts
    ```

2. Add a `update-config` step
    ```json
    {
       "scripts" : {
         "update-config": "node-config-ts"
       }
    }
    ```

3. Create a `config` directory inside your project's root folder and add a `default.json` file. A typical folder structure looks as follows —  
    ```
    root/
    └── config/
        └── default.json
    ```
    `default.json` should contain your application's configuration

4. Create typings
    ```bash
    npm run update-config
    ```
    A new `Config.d.ts` will be generated automatically. This file could be ignored from git as it gets automatically generated based on the structure of `default.json`

5. Add webpack plugin
```diff
  // webpack.config.js
  const webpack = require('webpack');
+ const WebpackEnvTsPlugin = require('@f0rr0/webpack-env-ts/plugin');

  module.exports = {
    ...
    plugins: [
      ...
+     new WebpackEnvTsPlugin({ verbose: true })
    ],
    devServer: {
-     port: 8000,
+     /* reference variables from your configuration! */
+     port: WebpackEnvTsPlugin.Config.PORT
    }
  }
```

6. Then access variables defined there from your app:

```js
  // app.js
  import Config from '@f0rr0/webpack-env-ts'
  Config.PORT  // 8000
```

### Configuration
Refer to [node-config-ts](https://github.com/tusharmath/node-config-ts/blob/master/README.md#configuration)