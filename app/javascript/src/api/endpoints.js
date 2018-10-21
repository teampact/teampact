const api = {
  basicPath: '/api',

  currentUserPath() {
    return `${this.basicPath}/current_user`;
  },

  spaceProfileList(spaceId) {
    return `${this.basicPath}/spaces/${spaceId}/profiles`;
  },
};

export { api };
