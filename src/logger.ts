import pino from 'pino';

const logger = pino({
    base: {
        name: 'console',
    },
    mixin() {
        return {
            hostname: process.env.HOSTNAME || 'localhost',
        };
    }
});

export default logger;