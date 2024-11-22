const pino = require('pino');

const logger = defaultConfig =>
  pino({
    ...defaultConfig,
    messageKey: 'message',
    mixin: (context) => {
      const additionalAttributes = context ? context : {};
      return {
        name: 'custom-pino-instance',
        ...additionalAttributes,
      };
    },
    formatters: {
      log: (object) => {
        if (object.message && typeof object.message === 'string') {
          try {
            const parsedMessage = JSON.parse(object.message);
            return { ...parsedMessage };
          } catch (err) {
            return object;
          }
        }
        return object;
      },
    },
  });

module.exports = {
  logger,
};
