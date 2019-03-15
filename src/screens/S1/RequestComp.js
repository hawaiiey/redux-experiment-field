import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { request } from './actions'

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
        {Object.entries(data).map(([key, value]) => (
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
  query: payload => request(payload)(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestComp)
