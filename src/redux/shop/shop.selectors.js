import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key=> collections[key])
)

//because we do currying, once we pass url once state

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);