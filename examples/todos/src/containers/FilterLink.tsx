import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { Dispatch } from 'redux';

interface StateProps {
    active:boolean
}

const mapStateToProps = (state: any, ownProps:any): StateProps => ({
  active: ownProps.filter === state.visibilityFilter
})

interface DispatchProps{
    onClick: () => Dispatch<any>
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
