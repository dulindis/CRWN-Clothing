import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'; 

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  });
  export const fetchCollectionsError = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  });

export const fetchCollectionsStartAsync = () => {
  //like  mapstatetorporps style
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    //get make an api call to fetch data asociated wiiht this database call
    collectionRef.get().then(snapshot=>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
     dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsError(error.message)));
  }
};

// export const fetchCollectionsSuccess = (collectionsMap) => ({
//   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
//   payload: collectionsMap,
// });