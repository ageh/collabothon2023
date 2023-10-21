export interface APIRequest {
  id: string;
  amount: number;
  commission: number;
  distance: number;

  accepted?: boolean;
  transferActive?: boolean;
  identificationConfirmed?: boolean;
  transferConfirmed?: boolean;
  handoverConfirmed?: boolean;
}

const baseAPIUrl = 'http://localhost:8585'

export const createRequest = (req: APIRequest) => {
  return fetch(baseAPIUrl + '/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req)
  })
}

export const getRequest = () => {
  return fetch(baseAPIUrl + '/request', { method: 'GET' })
    .then((res) => res.json())
    .then((data: APIRequest) => data);
}

export const updateRequest = (req: APIRequest) => {
  return fetch(baseAPIUrl + '/request', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req)
  })
}

export const deleteRequest = (req: APIRequest) => {
  return fetch(baseAPIUrl + '/request', { method: 'DELETE' });
}