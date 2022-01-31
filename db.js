const Client = require('pg').Pool;
// const client = new Client(devConfig);

const client = new Client({
    user: "bfdojrxstgdoaq",
    host: "ec2-50-19-32-96.compute-1.amazonaws.com",
    database: "d6c11j2dmr9444",
    password: "c10a98af4f1c6b08768e5c0129ac9604f7d84ffe78cc6306409bb0a1823c7782",
    port: 5432

})

// require('dotenv').config();

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

// {
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT
// }

// const proConfig = process.env.DATABASE_URL // coming from heroku addons

// const client = new Client({
//     connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });



module.exports = client;


