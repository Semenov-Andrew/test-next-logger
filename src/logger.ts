import pino from 'pino';

const logger = pino({
    level: 'info',
    base: {
        name: 'console',
    },
});

export default logger
