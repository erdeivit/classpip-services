module.exports = {
  db: {
    connector: 'mysql',
    hostname: process.env.API_DB_HOST || 'localhost',
    port: process.env.API_DB_PORT || 3306,
    user: process.env.API_DB_USER,
    password: process.env.API_DB_PASSWORD,
    database: process.env.API_DB
  },
  emailDs: {
    name: 'emailDs',
    connector: 'mail',
    transports: [{
      type: 'smtp',
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: process.env.API_MAIL_USER,
        pass: process.env.API_MAIL_PASSWORD
      }
    }]
  }
};
