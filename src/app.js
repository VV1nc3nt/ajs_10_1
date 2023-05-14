import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

export default GameSavingLoader.load().then((saving) => {
  const gameSave = new GameSaving(JSON.parse(saving));
  return gameSave;
}, (error) => new Error(error));
