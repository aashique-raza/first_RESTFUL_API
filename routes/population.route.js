import express from 'express'
import populationWorld from '../controllers/population.controller.js'

const populationRouter=express.Router()

populationRouter.get('/all',populationWorld.getAllData)
populationRouter.post('/create',populationWorld.createData)
populationRouter.get('/singledata/:id',populationWorld.getOneData)
populationRouter.delete('/delete/:id',populationWorld.deleteData)
populationRouter.patch('/updatedata/:id',populationWorld.updateData)





export default populationRouter;