//class component 
// function component can be used for static , it's not used for complex logic 
class Welcome extends React.Component {
  // render is used to render the html 
  render() {
    // this.props is basically properties from app to component
    console.log(this.props)
    return <h1>Hello, {this.props.from} to {this.props.to}</h1>;
  }
}