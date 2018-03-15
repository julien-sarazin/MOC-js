const fs = require('fs');

module.exports = server => {
    ensureLogsDirectoryExists();
    server.use(logger);

    function logger(req, res, next) {
        const now = new Date();
        const logPath = `${server.settings.logs_path}/${now.setHours(0, 0, 0, 0)}.log`;
        const log = `[${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}] ${req.method} - ${req.originalUrl} \n`;

        fs.appendFile(logPath, log, () => next());
    }

    function ensureLogsDirectoryExists() {
        fs.stat(server.settings.logs_path, (err, stats) => !err || createDirectory())
    }

    function createDirectory() {
        fs.mkdir(server.settings.logs_path)
    }
};


