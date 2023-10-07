const express=require("express");
const router=express.Router()

const Studcontroller=require('../controller/controller')

router.post('/addSTUD',Studcontroller.addStud)
router.get('/getSTUD',Studcontroller.getStud)
router.get('/getSTUDbyid/:id',Studcontroller.getStudbyid)
router.put('/updateSTUDbyid/:id',Studcontroller.updateStudbyid)
router.delete('/deleteSTUDbyid/:id',Studcontroller.deleteStud)
module.exports = router;