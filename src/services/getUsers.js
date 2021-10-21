export function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
  }