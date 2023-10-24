class Api {
    constructor(config) {
        this._url = config.url;
    }
  
    _handleResponse(res) {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`)
      }
    }
  
    getTable() {
        return fetch(`${this._url}`)
        .then(this._handleResponse);
    }
  }
  
  const api = new Api ({
  url: 'http://localhost:3000',
  })
  
  export default api;