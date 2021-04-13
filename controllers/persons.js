import got from 'got'

export let getAllPersons = async (req, res) => {
  const response = await got('https://jsonplaceholder.typicode.com/users')

  res.json({
    data: JSON.parse(response.body)
  })
}

export let getOnePerson = async (req, res) => {
  const response = await got(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)

  res.json(JSON.parse(response.body))
}

export let modifyOnePerson = async (req, res) => {
  const response = await got.patch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
    json: { ...req.params }
  })

  console.log(response.body)

  res.json(response.body)
}

export let deleteOnePerson = async (req, res) => {
  const response = await got.delete(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)

  res.json(JSON.parse(response.body))
}

export let createOnePerson = async (req, res) => {
  const response = await got.post(`https://jsonplaceholder.typicode.com/users`, {
    json: { ...req.params }
  })

  res.json(response.body)
}