const mongoose = require('mongoose')
const fs = require('fs')
const dbAdress = require('../config/db')

// const User = require('../app/models/user.js')
const Item = require('../app/models/item.js')

mongoose.Promise = global.Promise
mongoose.connect(dbAdress, {
  useMongoClient: true
})

const db = mongoose.connection

const done = () => db.close()

const parseItems = () => {
  return new Promise((resolve, reject) => {
    const items = []
    const parse = require('csv').parse
    const parser = parse({ columns: true })

    const input = fs.createReadStream('data/warehouse.csv')
    input.on('error', e => reject(e))

    parser.on('readable', () => {
      let record
      while (record = parser.read()) { // eslint-disable-line 
        items.push(record)
      }
    })

    parser.on('error', e => reject(e))
    parser.on('finish', () => resolve(items))
    input.pipe(parser)
    return items
  })
}

parseItems()
  .then((items) => {
    //   console.log(items)
    items.map(item => {
      Item.create({
        name: item.name,
        description: item.description,
        price: item.price
      })
    })
    return items
  })

// console.log(items)
// User.remove({})
//   .then(() => Book.remove({}))
//   .then(() => {
//     return User.create({ email: 'example@user.org', hashedPassword: '12345' })
//   })
//   .then(user => Promise.all([ user, parseBooks() ]))
//   .then(data => {
//     let [user, books] = data

//     return Promise.all(books.map(book => {
//       return Book.create({
//         title: book.title,
//         author: book.author,
//         originalLanguage: book.original_language,
//         firstPublished: book.first_published,
//         owner: user._id
//       })
//     }))
//   })
  .then(items => {
    console.log(`Created ${items.length} items!`)
  })
  .catch(console.error)
  .then(done)
