import pino from 'pino';

const logger = pino({
    transport: {
      target: 'pino-pretty', // Для форматирования логов в читаемый вид
      options: {
        colorize: true, // Цветные логи
        levelFirst: true,
        translateTime: 'yyyy-mm-dd HH:MM:ss',
        ignore: 'pid,hostname', // Уберите ненужные поля
      },
    },
  });
export default logger;
