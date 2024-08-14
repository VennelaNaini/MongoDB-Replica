const express = require('express')
const router = express.Router()
const Data = require('../models/data')


router.get('/', async(req,res) => 
{
    try
    {
           const requireddata = await Data.find()
           res.json(requireddata)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:Id', async(req,res) => 
{
    try
    {
           const data = await Data.findById(req.params.id)
           res.json(data)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const data = new Data
   ({
        Id: req.body.Id,
        name: req.body.name,
        Dept: req.body.Dept,
        email: req.body.email,
        placement: req.body.placement
    })

    try
   {
        const a1 =  await data.save() 
        res.json(a1).beautify()
    }
catch(err)
   {
        res.send(err)
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const data = await Data.findById(req.params.id);
        if (!data) return res.status(404).json({message: 'Student not found'});
        if (req.body.Id!=null) data.Id=req.body.Id;
        if (req.body.name!=null) data.name=req.body.name;
        if (req.body.Dept!=null) data.Dept=req.body.Dept;
        if (req.body.email!=null) data.email=req.body.email;
        if (req.body.placement!=null) data.placement=req.body.placement;
        const a1 = await data.save();
        res.json(a1);   
    }
catch(err)
   {
        res.send('Error')
    }

})
router.delete('/Id',async(req,res) => {
    try {
        const data=await Data.findById(re.param.id);
        if (!data) return res.status(404).json({message: 'Student not found'});
        await data.deleteOne();
        res.json({message: 'Student deleted'});
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});

module.exports = router

