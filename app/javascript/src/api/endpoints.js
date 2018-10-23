const api = {
  basicPath: '/api',

  currentUserPath() {
    return `${this.basicPath}/current_user`;
  },

  spaceProfileList(spaceId) {
    return `${this.basicPath}/spaces/${spaceId}/profiles`;
  },

  spaceProfile(spaceId, id) {
    return `${this.spaceProfileList(spaceId)}/${id}`;
  },
};

export { api };
