const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/', authentication, isAdmin, ProductController.create)
router.get('/', ProductController.getAll)
router.get('/id/:patata', ProductController.getById)
router.get('/name/:name', ProductController.getProductsByName)
router.delete(
	'/:papitaId',
	authentication,
	isAdmin,
	ProductController.deletePapita
)
router.put('/id/:_id', authentication, isAdmin, ProductController.update)
router.put('/reviews/:_id', authentication, ProductController.insertComment)
router.put('/likes/:_id', authentication, ProductController.like)

module.exports = router