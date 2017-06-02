import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class AccordionDecorator extends ReactComponent {
  constructor(props) {
    super()
    this.state = {
      openChildId: null
    }
  }


  render() {
    return <OriginalComponent {...this.props} openChildId={this.state.openChildId} toggleChild={this.toggleChild}/>
  }


  toggleChild = openChildId => ev => {
    if (openChildId === this.state.openChildId) {
      this.setState({openChildId : null})
    } else {
      this.setState({openChildId})
    }
    
  }
} 