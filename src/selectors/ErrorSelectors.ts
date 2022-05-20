export const errorsSelector = (actions: any, state: any) => {
  return actions.reduce((prevState: any, value: any) => {
    const error = state.error[value];

    if (error) {
      prevState.push(error);
    }

    return prevState;
  }, []);
};
