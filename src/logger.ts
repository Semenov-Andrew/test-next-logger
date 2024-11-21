import pino from 'pino';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true, // Раскрашивание вывода
            levelFirst: true, // Сначала уровень логирования
            translateTime: 'SYS:standard', // Читаемая временная метка
            ignore: 'pid,hostname', // Убираем ненужные поля
        },
    },
});

export default logger;
