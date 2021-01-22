async function getUsers() 
{
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json()
  console.log(FormData, ['name', 'email', 'mobile', 'quote'])
}
getUsers()