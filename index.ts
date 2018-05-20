import { config } from 'node-config-ts';

declare global {
  const __CONFIG__: Config
}

export default __CONFIG__;