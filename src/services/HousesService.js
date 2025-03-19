import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {



  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('Got Houses!', response.data)
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }


  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    logger.log('deleted car', response.data)
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)
  }





}



export const housesService = new HousesService()