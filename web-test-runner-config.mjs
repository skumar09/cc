// eslint-disable-next-line import/no-extraneous-dependencies
import { importMapsPlugin } from '@web/dev-server-import-maps';

export default {
  coverageConfig: {
    exclude: [
      '**/mocks/**',
      '**/node_modules/**',
      '**/test/**',
      '**/deps/**',
      '**/scripts/**',
    ],
  },
  plugins: [importMapsPlugin({})],
};
