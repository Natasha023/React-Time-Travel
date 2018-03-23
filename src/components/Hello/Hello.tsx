import * as React from 'react';
import './Hello.css';

export interface Props {
    name?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default class Hello extends React.Component<Props, object> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

  componentDidMount() {
       console.log(this.props);
       console.log(this.context);
      }

  getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

  render() {
    debugger;
    const { name, enthusiasmLevel = 1, onDecrement, onIncrement} = this.props;
    if ( enthusiasmLevel <= 0 ) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + this.getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    );
  }
}

// function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//     if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//     }
//
//     return (
//         <div className="hello">
//             <div className="greeting">
//                 Hello {name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//             <div>
//                 <button onClick={onDecrement}>-</button>
//                 <button onClick={onIncrement}>+</button>
//             </div>
//         </div>
//     );
// }
//
// export default Hello;
