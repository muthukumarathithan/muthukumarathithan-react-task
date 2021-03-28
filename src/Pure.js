import React, { PureComponent } from "react";
class Pure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { title: "excercise" },
        { title: "cooking" },
        { title: "Reacting" }
      ]
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(oldState => {
        return { taskList: [...oldState.taskList] };
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.taskList.map((task, i) => {
          return <Task key={i} title={task.title} />;
        })}
      </div>
    );
  }
}
class Task extends React.Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}
export default Pure;
