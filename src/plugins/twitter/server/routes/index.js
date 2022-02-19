module.exports = [
  {
    method: 'GET',
    path: '/v1/users',
    handler: 'myController.users',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/v1/search-users',
    handler: 'myController.searchUsers',
    config: {
      auth: false,
      policies: [],
    },
  },
]
