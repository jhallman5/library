const router = require('express').Router()
const Review = require('../../models/reviews')
const Book = require('../../models/books')
const passport = require('../../auth/passport')

router.get('/', (req, res) => {
  Review.threeMostRecentReviews()
    .then( reviews => {
      Book.getAll()
        .then( books => {
          res.render('home', {reviews: reviews, books: books})
        })
    })
    .catch( error => res.render('error', {error: error}))
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

router.post('/sign-in', (req, res) => {
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/sign-in' })(req, res)
})

router.get('/error', (req, res) => {
  res.render('error')
})

module.exports = router
