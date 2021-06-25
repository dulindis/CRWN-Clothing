import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';



const mapStateToProps = createStructuredSelector({
    //the name of property need to be the one withspinner is expecting hence this 
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps),WithSpinner)(CollectionsOverview);
//compose its currying all of its value togethers

export default CollectionsOverviewContainer;


//connect(mapStateToProps)(WithSpinner(CollectionsOverview))
