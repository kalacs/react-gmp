import { Configuration } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

import { config } from './webpack.config.common';

export const webpackProdConfig: Configuration = {
  mode: "production",
  ...config,
  performance: {
    hints: "warning",
    // Calculates sizes of gziped bundles.
    assetFilter: function (assetFilename: string) {
      return assetFilename.endsWith(".js.gz");
    },
  },
  // todo use webpack merge
  // todo use minifications for prod build
  plugins: [new CompressionPlugin()]
};
