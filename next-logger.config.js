const { jsonrepair } = require('jsonrepair');
const pino = require('pino');

const logger = (defaultConfig) =>
  pino({
    ...defaultConfig,
    nestedKeys: 'payload',
    hooks: {
      logMethod(inputArgs, method, level) {
        if (inputArgs.length === 1 && typeof inputArgs[0] === 'string') {
          const arg = inputArgs[0].trim();
          try {
            const jsonString = arg.replace(/'/g, '"');
            const obj = JSON.parse(jsonString);

            const msg = obj.msg || '';
            delete obj.msg;

            return method.apply(this, [obj, msg]);
          } catch (e) {
            const regex = /^(.*?)(\{.*\})$/s;
            const match = arg.match(regex);
            if (match) {
              const msg = match[1].trim();
              const jsonStr = match[2].replace(/'/g, '"');
              try {
                const obj = JSON.parse(jsonrepair(jsonStr));
                return method.apply(this, [obj, msg]);
              } catch (e2) {
              }
            }
          }
        }

        if (inputArgs.length >= 2) {
          const arg1 = inputArgs.shift();
          const arg2 = inputArgs.shift();
          return method.apply(this, [arg2, arg1, ...inputArgs]);
        }
        return method.apply(this, inputArgs);
      },
    },
  });

module.exports = {
  logger,
};
