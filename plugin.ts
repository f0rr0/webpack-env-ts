import { config } from "node-config-ts";
import { Plugin, Compiler, DefinePlugin } from "webpack";

export interface IWebpackEnvTsPluginOptions {
  verbose?: boolean;
}

export default class WebpackEnvTsPlugin {
  static Config: Config = config;
  options: IWebpackEnvTsPluginOptions;
  
  constructor(options?: IWebpackEnvTsPluginOptions) {
    this.options = options || {};
    if (this.options.verbose) {
      console.log("Applying configuration", JSON.stringify(config, null, 2));
    }
  }

  apply(compiler: Compiler) {
    compiler.apply(
      new DefinePlugin({
        __CONFIG__: JSON.stringify(config)
      })
    );
  }
}