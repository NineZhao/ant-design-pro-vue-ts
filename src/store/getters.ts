const getters = {
  roles: (state: { user: { roles: [] } }) => state.user.roles,
  addRouters: (state: any) => state.permission.addRouters
};

export default getters;
