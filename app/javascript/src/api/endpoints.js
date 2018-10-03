const api = {
  basicPath: '/api',

  currentUserPath() {
    return `${this.basicPath}/current_user`;
  },
};

export { api };
