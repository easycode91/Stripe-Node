const { Router } = require('express')
const stripe = require('stripe')('sk_test_rl5wYbJwUpw9vWcxBFPE2llx00bOETeq9G');

const router = Router();

router.get('',(req,res)=>{
    res.render('index')
})

router.post('/checkout', async (req, res) => {
   const customer = await stripe.customers.create({
        email : req.body.stripeEmail,
        source : req.body.stripeToken
    })
    const charges = await stripe.charges.create({
        amount : 3000,
        currency : 'usd',
        description : 'video editing',
        customer : customer.id
    })

     res.json({
         message : 'Received',
         data : charges
     });
        
});

module.exports = router;