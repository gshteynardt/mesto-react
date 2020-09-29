export const transformCard = (newCard) => {
  return {
    link: newCard.link,
    likes: newCard.likes,
    name: newCard.name,
    _id: newCard._id,
    ownerId: newCard.owner._id
  }
}