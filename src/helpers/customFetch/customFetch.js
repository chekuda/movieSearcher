export const get = (url, query) => {
  const formedURL = `${url}?api_key=${process.env.MB_KEY}${query}`

  return fetch(formedURL)
    .then(res => res.json())
}