import pino from 'pino';

const logger = pino({
    base: {
        name: 'console'
    },
    timestamp: () => `,"time":${Date.now()}`,
    formatters: {
        level: (label) => ({ level: label }),
        bindings: (bindings) => bindings,
        log: (object) => object
    }
});

export default logger;