import React from "react";
import ReactDOM from "react-dom";
// This is to pass props
interface AppProps {
  color?: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};
// This is to pass state
// interface AppState {
//   counter: number;
// }
// // Below is notation of class component as props and state are readonly we added interface
// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
