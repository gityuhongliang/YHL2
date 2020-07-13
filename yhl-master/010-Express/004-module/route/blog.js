const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('blog get t!'))
router.post('/', (req, res) => res.send('blog post t!'))
router.put('/', (req, res) => res.send('blog put t!'))
router.delete('/', (req, res) => res.send('blog delete t!'))


module.exports = router