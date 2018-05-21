import { config, Config } from '@f0rr0/node-config-ts';

declare global {
  const __CONFIG__: Config
}

export default __CONFIG__;