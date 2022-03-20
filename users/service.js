const service = {
  addUser: async (name, number) => {
    const response = [];
    for (let i = 0; i < number; i++) {
      response.push(name);
    }

    return response;
  }
}

module.exports = service;