import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { requestStart } from './actions'

class RequestComp extends Component {
  componentDidMount () {
    const { query } = this.props

    query()
  }

  render () {
    const {
      dataSource: { data },
    } = this.props
    console.log('request comp render!!!', this.props.dataSource)

    return (
      <Fragment>
        {data && Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <span>{key}: </span>
            <span>{value}</span>
          </div>
        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  dataSource: state.s1.dataSource,
})

const mapDispatchToProps = dispatch => ({
  // redux-thunk
  // query: payload => request(payload)(dispatch),
  // redux-promise
  query: payload => dispatch(requestStart(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestComp)
