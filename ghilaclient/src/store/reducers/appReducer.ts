const INITIAL_STATE = {
  snackbar: {
    isOpen: false,
    severity: 'success',
    message: '',
  },
  isLoading: false,
};

const routeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        snackbar: {
          isOpen: true,
          severity: action.payload.severity,
          message: action.payload.message,
        },
      };
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          isOpen: false,
        },
      };
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'IS_LOADED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default routeReducer;
