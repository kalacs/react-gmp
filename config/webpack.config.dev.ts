
import { merge } from 'webpack-merge';

import { config } from './webpack.config.common';
import { WebpackDevConfiguration } from './webpack.models';

export const webpackDevConfigPart: WebpackDevConfiguration = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    open: true,
    hot: true,
  },
};

export const webpackDevConfig = merge(config, webpackDevConfigPart);
