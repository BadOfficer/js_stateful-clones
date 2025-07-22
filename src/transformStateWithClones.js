'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = [];
  let copyState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        copyState = {};
        break;

      case 'addProperties':
        Object.assign(copyState, action.extraData);
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete copyState[property];
        }
        break;

      default:
        throw new Error('Unexpected action');
    }

    stateHistory.push({ ...copyState });
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
