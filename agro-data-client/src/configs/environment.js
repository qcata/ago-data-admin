const DEV_URL = 'https://localhost:44381';
const PRODUCTION_URL = 'localhost:44381';

const BASE_URL_DEV = `${DEV_URL}/api`;
const BASE_URL_PRODUCTION = `${PRODUCTION_URL}/api'`;

// eslint-disable-next-line import/prefer-default-export
export const getAppBaseUrl = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return BASE_URL_PRODUCTION;
        default:
            return BASE_URL_DEV;
    }
};
