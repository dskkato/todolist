import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../actions'
import Link from '../components/Link'
import { Dispatch } from 'redux';
import { RootState } from '../reducers';

type Props = {
  readonly filter: VisibilityFilters
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link) 