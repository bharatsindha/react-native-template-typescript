export const getUser = (state: any) => {
  return Object.keys(state.user).length > 0 ? state.user : null;
};
