const { response } = require('express')
const express = require('express')
const Transaction = require('../models/Transaction')
const moment = require('moment')

const router = express.Router()

router.post("/add-transaction", async function (req, res) {

    try {
        const newtransaction = new Transaction(req.body)
        await newtransaction.save();
        res.send('Transaction Added Successfully')
    } catch (error) {
        res.status(500).json(error);


    }
})

router.post('/get-all-transactions', async (req, res) => {
    const { frequency, selectedrange,type } = req.body;

    try {
        const transactions = await Transaction.find({
            ...(frequency !== 'custom' ? {
                date:
                {
                    $gt: moment().subtract(Number(req.body.frequency), 'd').toDate(),
                },
            } : {
                date: {
                    $gte: selectedrange[0],
                    $lte: selectedrange[1],
                },
            }),
            userid: req.body.userid,
            ...(type!== 'all' && {type}),
        })
        
        res.send(transactions)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})



module.exports = router