import React, { Component, useState } from 'react';
import { Layout, Row, Col, Avatar, Comment } from 'antd';
import { Provider, observer, inject } from 'mobx-react';
import AppState from './AppState'
import { IChatMessage } from "./Interfaces"
const { Content } = Layout;






const ChatWindow = inject("store") (
  observer (((props: { store?: AppState, user: string })=> {
    return (
      <div>
        {props.store!.messages ? props.store!.messages.map(
          (message: IChatMessage) => 
            <div className="commentWrapper" key={message.id} >
              <Comment 
                className={ message.user === props.user ? 'currentUserMessage' : '' } 
                avatar={ <Avatar style={{ backgroundColor: '#f56a00' }}>{message.user[0]}</Avatar> }
                author={message.user}
                content={message.message}
              >
              </Comment>
            </div>
        ) : null}
      </div>
    );
  })
))


const ChatInput = inject("store") (
  observer ((props: { store?: AppState, user: string }) => {
    
    const [message, setMessage] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && message) {
        props.store!.chatInput(props.user, message)
      }
    }
    return (
      <>
        <label>{props.user} said:</label><br/>
        <input 
          value={message} 
          onChange={changeHandler} 
          onKeyPress={keyPressHandler} 
        />
      </>
    );
  })
);

class App extends Component {
  store = new AppState();
  
  render() {
    return (
      <Layout>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Provider store={this.store}>
            <div>
              <Row>
                {this.store.users ? this.store.users.map((user: string, index: number)=>{
                  return(
                    <Col className="gutter-row" span={12} key={index}>
                      <div className="chatPanel" >                      
                        <ChatWindow user={user} />
                        <ChatInput user={user} />
                      </div>
                    </Col>
                  )
                }) : null }
              </Row>
            </div>
          </Provider>
        </Content>
      </Layout>
    );
  }
}

export default App;
