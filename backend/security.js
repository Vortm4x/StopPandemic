const username = 'maksym-trehubenko';
const password = 'U1chGAxxGQ7ebpHH';
const database = 'stoppandemic';
const cluster = 'k3uu1ds.mongodb.net';

const db_uri = `mongodb+srv://${username}:${password}@${database}.${cluster}/?retryWrites=true&w=majority`;
const session_key = 'jLZR%^Q6zeX@wZkA';
const port = 3000;

module.exports = {
    db_uri,
    port,
    session_key,
};