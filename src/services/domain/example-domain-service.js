import DataAccessService from '../data/data-access-service';

function _getShortDelay () {
  return _getRandomDelayBetween(1, 3, 2);
}

function _getRandomDelayBetween (min, max, roundTo) {
  return Number(Math.random() * (max - min) + min).toFixed(roundTo);
}

const ExampleDomainService = {
  /**
   * Example usage for DataAccessService
   * @returns {*}
   */
  getFoo () {
    return DataAccessService.get('/foo');
  },
  getFakePromise (doReject) {
    return new Promise((resolve, reject) => {
      const delay = _getShortDelay();
      setTimeout(() => {
        doReject
          ? reject(new Error('Fake Error!'))
          : resolve({ delay });
      }, delay * 1000);
    });
  },
  getTodo () {
    return DataAccessService.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list');
  }
};

export default ExampleDomainService;
