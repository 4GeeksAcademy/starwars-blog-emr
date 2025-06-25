export const initialStore = () => {
  return {
    message: null,
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_favorites':

      const { item } = action.payload;

      if (!store.favorites.find(f => f.uid == item.uid && f.type == item.type)) {
        return {
          ...store,
          favorites: [...store.favorites, item]
        };
      }
      return store

    case 'remove_favorite':

      const { uid, type } = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(f => !(f.uid === uid && f.type === type))
      };


    default:
      throw Error('Unknown action.');
  }
}
