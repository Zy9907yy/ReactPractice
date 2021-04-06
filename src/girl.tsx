// react项目girl的父组件
import React,{Component, Fragment} from 'react'

import Text from'./text.js'
import App from'./App.js'
// import Demo1 from './ts/Demo1';
import './girl.css'
import Header from './components/header/header';
import Guide from './components/guide/index'

interface test{
    inputValue:'zhangyu' | '',
    list:[...any,'Lisa','Jisoo'],
    start:boolean
   }

class Girl extends Component<any,test>{
    input: HTMLInputElement | null | undefined
    ul: HTMLUListElement | null | undefined
    // 初始化，调用了父类,为什么？？
    //在某一刻，可以自动执行的函数
    constructor(props :any){
        super(props)
        this.state = {
            inputValue:'zhangyu',
            list:['Lisa','Jisoo'],
            start: false
        }
    }
    handleGiude (){
        this.setState({
          start: true
        })
      }
      handleCancel (e: any) {
        this.setState({
          start: false
        })
      }
    // 渲染
    render(){
        // console.log('3-ender....组件挂载中')
        return (
            // 父组件
            <Fragment>
                <Header/>
                <div className='Header-tip'>以上是Header组件，接下来请点击start按钮开启”引导“</div>
                 <Guide visible={this.state.start} audio={true} onCancel={this.handleCancel.bind(this)} >
                 <button onClick={this.handleGiude.bind(this)}>start</button>
                 <header data-step="1" data-tip='欢迎，第一步'>React Guide</header>
            <div data-step='2' data-tip='第二步'>
                <input 
                className='input' 
                value={this.state.inputValue} 
                onChange={this.inputChange.bind(this)} 
                ref = {(input)=>{this.input = input}}
                />
                <button onClick={this.addList.bind(this)}>增加成员</button>
            </div>
            </Guide>
                <ul ref={(ul)=>{this.ul = ul}} className="girl-text"> 
                    {
                        this.state.list.map((item: any,index: any)=>{
                            return (
                            // <li
                            //  key={index+item} 
                            //  onClick={this.deleteItem.bind(this,index)}
                            // //  dangerouslySetInnerHTML={{__html:item}}
                            //  >
                            //     {item}
                            // </li>
                            // 父组件通过属性的方式传递给子组件数据（方法）
                            <Text                            
                            key={index+item}
                            content={item}
                            index={index} 
                            deleteItem={this.deleteItem.bind(this)}
                            />  
                                                  
                            )
                        })
                    }
                </ul>
                <button onClick={this.zhangyu.bind(this)} data-step='3' data-tip='第3步'>跳转的新界面(此按钮没有被引导)</button>

                <div className='App-style'>
                    <App />
                </div>
                {/* <div className='drag'>鼠标拖拽
                <div id='drag-textarea'><textarea>1</textarea></div>
                </div> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        style="font-family: Times New Roman;
               font-size  : 24;
               stroke     : #00ff00;
               fill       : #0000ff;"
    >
    SVG text styling
  </text>
</svg> */}
           </Fragment> 
        )
    }
    // 事件绑定
    inputChange(e: any){
        console.log(e.target.value)
        // 状态改变
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue:e.target.value
            // inputValue:this.input.value
        })
    }
    // 增加列表
    addList(){
        // setstate是异步的,他有一个回调函数
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },
        // ()=>{
        //     console.log(this.ul.querySelectorAll('li').length)
        // }
        )

    }
    // 删除列表项
    deleteItem(index:any){
        // 不允许直接操作state里的数据，会产生性能问题，需要赋值给list之后再操作list
        console.log(index)
        const list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
//Ts练习
 zhangyu(){
    const web:string = 'hello world'
    console.log(web)
}
}

// 静态类型,null,undefind,boolean,void,symbol
// let count :number = 1;
// const myName :string = 'zhangyu';

interface Xiaojiejie{
    uname: string,
    age:number
}
const xiaohong :Xiaojiejie = {
    uname:'jennie',
    age:18
}
console.log(xiaohong.age)
// 对象类型：对象，数组，类，函数类型
// const Duixiang:{
//     name:string,
//     age:number
// } = {
//     name:'jsoo',
//     age:18
// }
// const shuzu:string [] =['jsoo','lisa','jnne']

// class Person{}
// const jsoo :Person = new Person()

// const jiaxiaojiejie : ()=>string = ()=>{return 'jsoo'}
//类型推断
function add({one,two}:{one:number,two:number}){
    return one+two
}
const total = add({one:1,two:2})
console.log(total)
// 数组
// const numberArr :number[] = [1,2,3]
// const allArr :(number | string)[] = [1,'string',2] 
// const xiaojiejie :{name:string,age:number}[] = [
//     {name:'lisa',age:16},
//     {name:'jsoo',age:17}
// ]
// 类型别名
// type Lady = {sname:string,sage:number}
// class Mada {
//     sname: string | undefined;
//     sage: number | undefined
// }
// const xiaojiejie2:Mada[] = [
//     {sname:'lisa',sage:16},
//     {sname:'jsoo',sage:17}
// ]
// 接口练习
interface Face{
    name:string;
    age:number;
    bust:number;
    wis?:number;//有或没有
    [propname:string]:any;//任意加均可
    say():string;
}
const face={
    name:'jsoo',
    age:23,
    bust:94,
    wis:21,
    sex:'女',
    say(){
        return '欢迎光临'
    }
}

const screenResume =(face:Face)=>{
face.age <= 24 &&face.bust>=90 && console.log(face.name+'进入面试')
face.age > 24 &&face.bust<90 && console.log(face.name+'淘汰')
console.log('腰围是'+face.wis)
console.log('性别是'+face.sex)
console.log(face.say())
}
screenResume(face)
// 类的学习
class Person1{
    constructor(public name:string){}
}
class Teacher extends Person1{
    constructor(public _age:number){
        super('jsoo')
    }
    get age(){
        return this._age - 10
    }
}
const teacher = new Teacher(18)
console.log(teacher.age)
// 抽象类练习
// abstract class Base{
// abstract skill(): any 
// }
// class Waiter extends Base{
// skill(){
// console.log('1')
// }
// }
// class BasterTeacher extends Base{
// skill(){
// console.log('2')
// }
// }
// class seniorTeacher extends Base{
// skill(){
// console.log('3')
// }
// }
// const ts = new Waiter()
// const ts2 = new BasterTeacher()
// const ts3 = new seniorTeacher()

// console.log(ts,ts2,ts3)

// 枚举
enum Status {
    LISA = 1,
    ROSE,
    JENNIE,
    JISOO
}
function getServe(status:any){
if(status === Status.LISA){
return 'lisa'
}else if(status === Status.ROSE){
return 'rose'
}else if(status === Status.JENNIE){
return 'jennie'
}else if(status === Status.JISOO){
    return 'jisoo'
    }
}
const result = getServe(Status.LISA)
console.log(`我喜欢${result}`,Status.LISA)
// 泛型
// 泛型中的数组
function join<T>(params:T[]){
// return `${params}`
return params
}
join<string>(['jspang','zhangyu'])
//第二种方法，数组
function join2<T>(params:Array<T>){
    return params
    }
join2<string>(['111','133'])
//泛型中的继承
interface BlackPink{
    name:string;
}
class SelectGirl<T extends BlackPink>{
    constructor(private girls:T[]){}
    getGirl(index:number) {
        return this.girls[index].name
    }
}
const selectGirl = new SelectGirl([
    {name:'lisa'},
    {name:'jennie'},
    {name:'jisoo'}
]);
console.log(selectGirl.getGirl(1))

export default Girl;