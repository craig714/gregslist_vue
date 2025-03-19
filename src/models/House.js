export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator

  }
}











const exampleData = {
  "_id": "67c76b7385d6f1c2c2f48d38",
  "bedrooms": 10,
  "bathrooms": 14,
  "levels": 5,
  "imgUrl": "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
  "year": 1990,
  "price": 10000000,
  "description": "Modest house that Jake lives in",
  "creatorId": "67c7497b9d0ebdf64186d8d6",
  "createdAt": "2025-03-04T21:06:59.720Z",
  "updatedAt": "2025-03-04T21:06:59.720Z",
  "__v": 0,
  "creator": {
    "_id": "67c7497b9d0ebdf64186d8d6",
    "name": "Miata Fan xoxo",
    "picture": "https://plus.unsplash.com/premium_photo-1664302545709-27a66bee7b87?q=90&w=400&h=400&fit=crop&crop=focalpoint&fp-x=0.72&fp-y=0.37&fp-z=3.75",
    "id": "67c7497b9d0ebdf64186d8d6"
  },
  "id": "67c76b7385d6f1c2c2f48d38"
}