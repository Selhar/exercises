const env = process.env;
export const node_env = env.NODE_ENV || 'dev';
export default {
    port: env.PORT || 3000
};