import actions, {
  PROVIDER_CHANGE
} from './actions'
import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata, batch, entity} ) => {
  if(!!(metadata && metadata.delta) && entity === 'ethers') {
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: {
          REQUESTED: undefined,
          SUCCESS: true,
          FAILURE: false
        }[batch],
        data: payload
      }
    }
  } else{
    switch (type) {
      case actions.PROVIDER_CHANGE:
        return {
          ...state,
          provider: payload
        }
      case actions.CHAIN_CHANGE:
        return {
          ...state,
          chain: payload
        }
      case actions.JSONRPC_URL_CHANGE:
        return {
          ...state,
          url: payload
        }
      default:
        return state
    }
  }
}
  