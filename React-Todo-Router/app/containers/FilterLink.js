
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import 	LinkView from '../components/LinkView'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
    changeVisibility: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const FilterLink	=	connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkView)

export default FilterLink;
