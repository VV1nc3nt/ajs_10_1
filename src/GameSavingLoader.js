import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const loadData = new Promise((resolve) => {
      read().then((response) => {
        json(response).then((data) => {
          setTimeout(() => {
            resolve(data);
          }, 0);
        });
      });
    });
    return loadData;
  }
}
