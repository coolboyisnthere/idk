self.__dynamic$config = {
  prefix: '/service/',
  encoding: 'aes',
  mode: 'production',
  logLevel: 3,
  bare: {
    version: 2,
    path: "https://bare.mathclasses.xyz/"
  },
  tab: {
    title: 'Service',
    icon: null,
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Sodium/1.3.0',
  },
  assets: {
    prefix: '/dynamic/',
    files: {
      handler: '/dynamic/dynamic.handler.js',
      client: '/dynamic/dynamic.client.js',
      worker: '/dynamic/dynamic.worker.js',
      config: '/dynamic/dynamic.config.js',
      inject: null,
    }
  },
  block: [
  
  ]
};