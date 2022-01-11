import client from '../configs/client';
import { handleResponse, handleError } from './apiUtils';

// eslint-disable-next-line import/prefer-default-export
export function getCropDetails(landId) {
    return client({ url: `/land/${landId}`, method: 'GET' })
        .then(handleResponse)
        .catch(handleError);
}
