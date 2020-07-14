const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('main/index')
})
// router.post('/', (req, res) => res.send(' user post t!'))
// router.put('/', (req, res) => res.send('user put t!'))
// router.delete('/', (req, res) => res.send('user delete t!'))

module.exports = router