module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  middleware: {
    //...
    session: {
      enabled: true,
      // Add the keys property and provide an array of keys
      keys: ['L9EHF3OYgTe0', 'SN0HxAxUVYue'],
    },
    //...
  },
});
