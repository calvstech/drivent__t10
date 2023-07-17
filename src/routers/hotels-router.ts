import { authenticateToken } from "@/middlewares";
import { Router } from "express";
import { getHotels, getHotelsWithRoom } from "@/controllers/hotel-controller";

const hotelsRouter = Router()


hotelsRouter.all('/*', authenticateToken).get('/', getHotels).get('/:hotelId', getHotelsWithRoom)


export {hotelsRouter}