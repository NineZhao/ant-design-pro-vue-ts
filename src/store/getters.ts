const getters = {
  roles: (state: { user: { roles: [] } }) => state.user.roles
};

export default getters;
