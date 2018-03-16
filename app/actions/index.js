import * as musicActions from './music.action';
import * as searchActions from './search.action';
import * as playActions from './play.action';

export default { ...musicActions, ...searchActions, ...playActions };