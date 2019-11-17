const { Router } = require('express')
const stripe = require('stripe')('sk_test_rl5wYbJwUpw9vWcxBFPE2llx00bOETeq9G');

const router = Router();

router.get('',(req,res)=>{
    res.render('index')
})

router.post('/checkout', async (req, res) => {
res.send('Received');
   const customer = await stripe.customers.create({
        email : req.body.stripeEmail
    })

    const token = req.body.stripeToken;

    const charges = await stripe.chargers.create({
        amount : 3000,
        currency : 'usd',
        description : 'Example pay with stripe',
        source : token,
        customer : customer.id
    })

    console.log(req.body);
        
});

module.exports = router;