import React from 'react';
import ReactDOM from 'react-dom';
import Message from "./components/Message";

class HelloMessage extends React.Component{
    constructor() {
        super();

        this.state = {
            count: 0,
            messages: [],
        };
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(){
        const {messages, count} = this.state;
        this.setState({messages: [...messages, `Сообщение ${count}`], count: count + 1})
    }

    render() {
        const {messages} = this.state;
        return <div>
            <h4>React {this.props.text}.</h4>
            <Message />
            <button onClick={this.addMessage}>Новое сообщение</button>
            <ul>
                {messages.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>;
    }
}

ReactDOM.render(
    <HelloMessage text="— JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов." />,
    document.getElementById('hello-example')
);