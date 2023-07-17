import { notFoundError, cannotListHotelsError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import hotelRepository from "@/repositories/hotel-repository/intex";
import ticketsRepository from "@/repositories/tickets-repository";

async function listHotels(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId) 
    if(!enrollment){
        throw notFoundError()
    }

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id)
    if(!ticket || ticket.status === 'RESERVED' || ticket.TicketType.isRemote || ticket.TicketType.includesHotel){
        throw cannotListHotelsError()
    }

}

async function getHotels(userId:number) {
    await listHotels(userId)

    const hotels = await hotelRepository.findHotels()
    return hotels
}

async function getHotelsWithRoom(userId:number, hotelId:number) {
    await listHotels(userId)
    const hotel = await hotelRepository.findRoomsByHotelId(hotelId)

    if(!hotel){
        throw notFoundError()
    }
    return hotel
}

export default {
    getHotels,
    getHotelsWithRoom
}