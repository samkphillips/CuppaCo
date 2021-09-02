const db = require('../db')
const { Brew, Roast } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const sumatra = await Roast.find({ roastName: 'Sumatra' })
  const veranda = await Roast.find({ roastName: 'Veranda Blend' })
  const pike = await Roast.find({ roastName: 'Pike Place' })

  const brews = [
    {
      authorName: 'Barry',
      date: new Date('2021-08-30T08:25:00'),
      drankAt: 'Lundy Mill Starbucks',
      brewMethod: 'Drip',
      preppedWith: 'Cream and Sugar',
      aromaNotes: 'Chocolate and spices',
      flavorNotes:
        'Slight chocolatey flavor but too bitter. Not a bad cup of coffee but not the best',
      rating: 6,
      roastID: sumatra[0]._id
    },
    {
      authorName: 'Sue',
      date: new Date('2021-08-31T18:05:00'),
      drankAt: 'Home',
      brewMethod: 'French Press',
      preppedWith: 'Black',
      aromaNotes: 'Spicy and rich',
      flavorNotes:
        'A wonderful, balanced cup, with a nice natural sweetness nestled into the rich dark flavors. Slightly muddled taste though, might be better suited to a filtered brew.',
      rating: 8,
      roastID: sumatra[0]._id
    },
    {
      authorName: 'Barry',
      date: new Date('2021-08-30T13:10:00'),
      drankAt: 'Lundy Mill Starbucks',
      brewMethod: 'Drip',
      preppedWith: 'Cream and Sugar',
      aromaNotes: 'Malty',
      flavorNotes:
        'Paired with a chocolate chip cookie and was in heaven. Exactly my type of coffee',
      rating: 9,
      roastID: veranda[0]._id
    },
    {
      authorName: 'Drew',
      date: new Date('2021-08-30T09:09:00'),
      drankAt: 'Home',
      brewMethod: 'Pour Over',
      preppedWith: 'caramel creamer',
      aromaNotes: 'toasted nut mingling with the caramel from th creamer',
      flavorNotes: 'this is my daily driver coffee and i can never have enough',
      rating: 10,
      roastID: pike[0]._id
    },
    {
      authorName: 'Diana',
      date: new Date('2021-09-01T09:01:21'),
      drankAt: 'Mall of Bellevue Starbucks',
      brewMethod: 'Drip',
      preppedWith: 'Splash of Cream',
      aromaNotes: 'Nutty and slight chocolate',
      flavorNotes:
        'The true neutral of coffess. Not particularly exciting but definitely drinkable.',
      rating: 6,
      roastID: pike[0]._id
    }
    // {
    //   authorName: ,
    //   date: ,
    //   drankAt: ,
    //   brewMethod:
    //   preppedWith: ,
    //   aromaNotes: ,
    //   flavorNotes: ,
    //   rating: ,//number
    //   roastID:
    // },
  ]

  await Brew.insertMany(brews)
  console.log('Created brew reviews for the roasts!')
}
const run = async () => {
  await main()
  db.close()
}

run()
