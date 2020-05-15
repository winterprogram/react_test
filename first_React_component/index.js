
class App extends React.Component{
  render(){
    return (
      <Welcome/>
    )
  }
}
// below code is DOM of react which tells which class to render where
// ReactDom.render(<name of the class/>, document.getElementById('name of ID'))  ---- (syntax of ReactDOM)
  ReactDOM.render(<App/>,document.getElementById('root'))