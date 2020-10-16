import { connect } from 'react-redux'
// import { addbusiness} from '../redux/actions'
import Search from '../components/Search'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      recipes: state.recipes,
      //loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Search)