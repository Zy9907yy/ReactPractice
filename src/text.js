/*
 * @Author: zhangyu
 * @Date: 2021-01-14 15:35:04
 * @Description: 
 */
// react项目girl的子组件(下面的列表组件)
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Text extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    //组件第一次存在于dom中，函数是不会被执行
    //如果已经存在于dom中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('5-child')
    // }
    // componentWillUnmount(){
    //     console.log('child-组件被删除之前执行')
    // }

    shouldComponentUpdate(nextProps,nextState){
        // eslint-disable-next-line react/prop-types
        if(nextProps.content!==this.props.content){
        return true;
        }else{
            return false;
        }
    }
    render() { 
        return (  
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }

    handleClick(){
        // 通过props接收父组件传过来的值
        // 接收父组件传过来的方法
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

// 子组件进行校验
Text.propsTypes={
    avname:PropTypes.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
// 增加默认值(父组件并没有传值)
 Text.defaultProps={
     avname:'小小'
 }

export default Text;