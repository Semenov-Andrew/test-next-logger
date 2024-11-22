const { jsonrepair } = require('jsonrepair');
const pino = require('pino');

const logger = (defaultConfig) =>
  pino({
    ...defaultConfig,
    hooks: {
      logMethod(inputArgs, method) {
        if (inputArgs.length === 1 && typeof inputArgs[0] === 'string') {
          const arg = inputArgs[0].trim();
          try {
            const jsonString = arg.replace(/'/g, '"');
            const obj = JSON.parse(jsonString);

            let msg;
            if (obj.hasOwnProperty('msg')) {
              msg = obj.msg;
              delete obj.msg;
            }

            if (msg) {
              // Only pass 'msg' if it's not empty
              return method.apply(this, [obj, msg]);
            } else {
              return method.apply(this, [obj]);
            }
          } catch (e) {
            // Attempt to parse a message and a JSON object from the string
            const regex = /^(.*?)(\{.*\})$/s;
            const match = arg.match(regex);
            if (match) {
              const msg = match[1].trim();
              const jsonStr = match[2];
              try {
                const obj = JSON.parse(jsonrepair(jsonStr.replace(/'/g, '"')));
                if (msg) {
                  return method.apply(this, [obj, msg]);
                } else {
                  return method.apply(this, [obj]);
                }
              } catch (e2) {
                // Parsing failed; proceed to default behavior
              }
            }
          }
        }

        // Default behavior as per Pino documentation
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
