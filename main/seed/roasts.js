const db = require('../db')
const { Roast } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const roasts = [
    {
      roastName: 'Sumatra',
      roaster: 'Starbucks',
      beanOrigin: 'Indonesia',
      beanType: 'Arabica',
      roastColor: 4 //dark
    },
    {
      roastName: 'Veranda Blend',
      roaster: 'Starbucks',
      beanOrigin: 'Latin America',
      beanType: 'Arabica',
      roastColor: 2 //blonde
    },
    {
      roastName: 'Pike Place',
      roaster: 'Starbucks',
      beanOrigin: 'Latin America',
      beanType: 'Arabica',
      roastColor: 3 //medium
    }
    // {
    //   roastName: ,
    //   roaster: ,
    //   beanOrigin: ,
    //   beanType: ,
    //   roastColor:
    // },
  ]

  await Roast.insertMany(roasts)
  console.log('Created roasts!')
}

const run = async () => {
  await main()
  db.close()
}

run()
