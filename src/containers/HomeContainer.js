import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;
//before we usually used to import components in app.js but now we import components to containers and we import containers in app.js