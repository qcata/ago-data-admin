import client from '../configs/client';
import { handleResponse, handleError } from './apiUtils';

// eslint-disable-next-line import/prefer-default-export
export function saveLandTile(userId, dto) {
    return client({ url: `${userId}/land`, method: 'POST', data: dto })
        .then(handleResponse)
        .catch(handleError);
}
