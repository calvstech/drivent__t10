import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import hotelsService from "@/services/hotels-service";

export async function getHotels(req: AuthenticatedRequest, res: Response){
 const { userId } = req

 try{
    const hotels = await hotelsService.getHotels(Number(userId))
    return res.status(httpStatus.OK).send(hotels)

 }catch(error){
    if(error.name === "NotFoundError"){
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED)
 }
}


export async function getHotelsWithRoom(req: AuthenticatedRequest, res: Response){
    const { userId} = req
    const { hotelId } = req.params

    try{
        const hotels = await hotelsService.getHotelsWithRoom(Number(userId), Number(hotelId))
        return res.status(httpStatus.OK).send(hotels)
    }catch(error){
        if(error.name === "NotFoundError"){
            return res.sendStatus(httpStatus.NOT_FOUND)
        }
        return res.sendStatus(httpStatus.PAYMENT_REQUIRED)
    }

}