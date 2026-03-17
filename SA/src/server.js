const express = require('express')
const app = express()
const port = 3000
 
const netflixRoutes = require('./routes/netflixRoutes')
 
app.get('/', (req, res) => {
  res.send('There are no routes here.')
})
 
app.use('/netflix', netflixRoutes)
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 