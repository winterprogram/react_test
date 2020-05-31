## STATE

1) In state if we set same state more than one time then, react will batch it into one and will consider the last state as for it we are setting same state and it came last. 
That's why we should use callbacks to avoid such cases. (below syntax of callback)
```
this.setState(<name>=>{return {score: <name>.score +1}})
```
2) while using complex state like objects, array  or array of objects, we will not create a new array rather we will create an array and make a copy of it and will use spread operators [... this.state.icons,newIcon].
```
this.setState({icons:[... this.state.icons (same array),newIcon(new element)]})
```
3) To set static default props 
```
class <Classname> extends Component{
    static defaultProps={
        key:value
    }
}
```
