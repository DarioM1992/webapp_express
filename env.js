const {
    SERVE_PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

const quit = message => {
    console.error(message);
    process.exit(1);
}


if (SERVE_PORT === null || SERVE_PORT === undefined){
    quit('variable SERVE_PORT missing');
}

const servePort = Number(SERVE_PORT);

if (Number.isNaN(servePort)){
    quit('variable SERVE_PORT missing');
}

// DB_HOST
if (!DB_HOST || DB_HOST === '') {
     quit(" invalid variable DB_HOST");
}

// DB_PORT
if (!DB_PORT) {
    quit('variable DB_PORT missing');
}

const dbPort = Number(DB_PORT);

if (Number.isNaN(dbPort)){
    quit('invalid variable DB_PORT ');
}

// DB_USER
if (!DB_USER){
    quit('variable DB_PORT missing');
}

// DB_PASSWORD
if (!DB_PASSWORD) {
    quit('variable DB_PASSWORD missing');
}

// DB_NAME
if (!DB_NAME || DB_NAME === '') {
     quit(" invalid variable DB_HOST");
}

export const env = { 
    SERVE_PORT: servePort,
    DB_HOST ,
    DB_PORT: dbPort,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
};