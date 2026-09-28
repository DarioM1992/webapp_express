const servePortStr = process.env.SERVE_PORT;

if (servePortStr === null || servePortStr === undefined){
    console.error('variable SERVE_PORT missing');
    process.exit(1);
}

const servePort = Number(servePortStr);

if (Number.isNaN(servePort)){
    console.error('variable SERVE_PORT missing');
    process.exit(1);
}

export const env = { SERVE_PORT: servePort };