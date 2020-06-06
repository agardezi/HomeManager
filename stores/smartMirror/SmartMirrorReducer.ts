import { FETCH_CONFIG_FILE, UPDATE_CONFIG_FILE,  UPDATE_MODULES } from '../actions/types';

const initialState = {
  config: {},
  configFormatModules: [],
  modules:[],
  updatedConfig: {},
  isLoading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONFIG_FILE:
      return {
        // ...state,
        config: action.payload,
        configFormatModules: action.payload.modules,
        modules: action.formattedModules,
        isLoading: false,
      };
    case UPDATE_CONFIG_FILE:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_MODULES:
      return{
          ...state,
          configFormatModules: action.payload

      }
    default:
      return state;
  }
}