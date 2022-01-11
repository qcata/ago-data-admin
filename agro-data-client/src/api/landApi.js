import client from '../configs/client';
import { handleResponse, handleError } from './apiUtils';

export function saveLandTile(userId, dto) {
    return client({ url: `${userId}/land`, method: 'POST', data: dto })
        .then(handleResponse)
        .catch(handleError);
}

export function getLands(userId) {
    return client({ url: `${userId}/land`, method: 'GET' })
        .then(handleResponse)
        .catch(handleError);
}
