const walletRouter = require("express").Router()

const walletController = require('../../controllers/customers/wallet.controller')

walletRouter.get('/income', walletController.GetIncome)
walletRouter.get('/expense', walletController.GetExpense)
walletRouter.get('/:id', walletController.getDetailWallet)

module.exports = walletRouter