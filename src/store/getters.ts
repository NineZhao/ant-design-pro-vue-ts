const getters = {
  roles: (state: { user: { roles: [] } }) => state.user.roles,
  addRouters: (state: {
    permission: { addRouters: ConcatArray<{ path: string; component: () => Promise<typeof import("*.vue")> }> };
  }) => state.permission.addRouters,
  multiTab: (state: { app: { multiTab: any } }) => state.app.multiTab
};

export default getters;
