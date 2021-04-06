/*
 * @Author: zhangyu
 * @Date: 2021-02-20 17:40:13
 * @Description: 
 */
import * as React from 'react';
import { Component } from 'react';
export interface startDragProps {
    mouseX?:string;
    mouseY?:string;
}
 
export interface startDragState {
    showText?:boolean;
}
 
class startDrag extends React.Component<startDragProps, startDragState> {
    constructor(props: startDragProps) {
        super(props);
        // this.state = { :  };
    }
    // render() { 
    //     // return (  );
    // }
}
 
export default startDrag;