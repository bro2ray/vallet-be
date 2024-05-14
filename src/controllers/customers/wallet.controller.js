const walletModel = require('../../models/wallet.model')
const errorHandler = require('../../helpers/utils')

exports.getDetailWallet = async (req, res) => {
  try{
    const id = Number(req.params.id)
    const wallet = await walletModel.findOneByUserId(id)

    if(!wallet){
      throw ({code: 'THROW', message: 'Wallet Not Found'})
    }

    return res.json({
      succes: true,
      message: 'Detail Wallet',
      results: wallet
    })
  }catch(err){
    errorHandler.outError(err,res)
  }
}


exports.GetIncome = async (req, res) => {
  const {id: recipientId} = req.user

  try {
      const income = await walletModel.GetIncome(recipientId)

      return res.json({
          success: true,
          message: 'income',
          results: income
      })
      
  } catch (error) {
    errorHandler.outError(error, res)
  }
}


exports.GetExpense = async (req, res) => {
  const {id: senderId} = req.user
  console.log(senderId)

  try {
      const expense = await walletModel.GetExpense(senderId)
      console.log(expense)

      return res.json({
          success: true,
          message: 'income',
          results: expense
      })
      
  } catch (error) {
    errorHandler.outError(error, res)
  }
}