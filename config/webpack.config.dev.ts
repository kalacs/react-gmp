import { config } from './webpack.config.common';

import { WebpackDevConfiguration } from './webpack.models';

export const webpackDevConfig: WebpackDevConfiguration = {
  mode: "development",
  ...config,
  devServer: {
    open: true,
    hot: true,
  },
};
