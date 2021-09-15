import { webpackDevConfig, webpackProdConfig } from './config';

const isProduction = process.env.NODE_ENV === 'production';

export default [isProduction ? webpackProdConfig : webpackDevConfig];

