import {STATUS} from '@/constants';

const {ERROR, LOADING, NOT_STARTED, SUCCESS} = STATUS;

export const statusSelector = (action: any, state: any) => {
  return state.status[action];
};

export const hasStatusSelector = (action: any, status: any, state: any) => {
  return state.status[action] === status;
};

export const notStartedSelector = (actions: any, state: any) => {
  return actions.reduce((prevState: any, value: any) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState && status === NOT_STARTED;
  }, true);
};

export const isLoadingSelector = (actions: any, state: any) => {
  return actions.reduce((prevState: any, value: any) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState || status === LOADING;
  }, false);
};

export const hasErrorsSelector = (actions: any, state: any) => {
  return actions.reduce((prevState: any, value: any) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState || status === ERROR;
  }, false);
};

export const successSelector = (actions: any, state: any) => {
  return actions.reduce((prevState: any, value: any) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState && status === SUCCESS;
  }, true);
};

export const fullStatusSelector = (action: any, state: any) => {
  const status = state.status[action];
  const error = state.error[action];
  const isLoading = status === LOADING;
  return {status, isLoading, error};
};
