// rcc
import React, { Component } from 'react'
// useState 사용 불가
export default class ExClass extends Component {

    // lifeCycle : 컴포넌트의 생명 주기를 의미 => 생명주기 특정 시점 (Mount, Update, WillUnMount)

    state = {
        number: 0,
    };

    // Mount =>componentDidMounut
    componentDidMounut() {
        console.log("컴포넌트 실행 !!")
    }
    // Update => 화면 갱신 =>componentDidMounut
    componentDidUpdate(){
        console.log("화면 Update !!")

    }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.setState( {number: this.state.number+1} )}>Plus</button>
      </div>
    );
  };
};
