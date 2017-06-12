const env = process.env;
export const node_env = env.NODE_ENV || 'dev';
export default {
    port: env.PORT || 3000,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};
