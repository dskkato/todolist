import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../actions/actions'
import Link from '../components/Link'
import { Dispatch } from 'redux';
import { RootState } from '../reducers/reducers';

type Props = {
  filter: VisibilityFilters
}

const mapStateToProps = (state: RootState, ownProps: Props) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink