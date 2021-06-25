import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import CartDropdown from './cart-dropdown.component';





const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});