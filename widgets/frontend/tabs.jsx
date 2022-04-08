import React from "react";

class Tabs extends React.Component{
  constructor(props){
    // debugger;
    super(props);
    this.state = {tabs: this.props.array, index: 0};
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(e){
    this.setState({index: e.target.className});
  }

  render(){
    return(
      <ul className="tabbies">
        <header className="tabs">
          <span onClick={this.changeTab} className="0">{this.state.tabs[0].title}</span>
          <span onClick={this.changeTab} className="1">{this.state.tabs[1].title}</span>
          <span onClick={this.changeTab} className="2">{this.state.tabs[2].title}</span>
        </header>
        <article className="content">{this.state.tabs[this.state.index].content}</article>
      </ul>
    )
  }

}

export default Tabs;