import { useState, useEffect } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import {useAppContext} from '../AppProvider/AppProvider';

const App = ()=> {
  // state = {
  //   activePage: "",
  //   costs: [],
  //   incomes: [],
  // };
const {activePage, costs, incomes} = useAppContext();

switch (activePage){
  case "costs":
    return <TransactionPage transType={activePage}/>;

    case "incomes":
      return <TransactionsHistoryPage transType={activePage}/>;

      case "costsHistory":
        return <TransactionsHistoryPage transactions={costs}/>;

        case "incomesHistory":
          return <TransactionsHistoryPage transactions={incomes}/>;

          case "balance":
            return <BalancePage/>;

            default :
            return <MainPage/>;
}
};
//   handleOpenPage = (activePage) => {
//     this.setState({ activePage });
//   };

//   handleClosePage = () => this.setState({ activePage: "" });

//   addTransaction = ({ transType, transaction }) => {
//     this.setState((prevState) => ({
//       [transType]: [...prevState[transType], transaction],
//     }));
//   };

//   render() {
//     const { activePage } = this.state;
//     switch (activePage) {
//       case "costs":
//         return (
//           <TransactionPage
//             transType={activePage}
//             handleClosePage={this.handleClosePage}
//             addTransaction={this.addTransaction}
//           />
//         );
//       case "incomes":
//         return (
//           <TransactionPage
//             transType={activePage}
//             handleClosePage={this.handleClosePage}
//             addTransaction={this.addTransaction}
//           />
//         );
//       case "balance":
//         return <BalancePage />;
//       default:
//         return <MainPage handleOpenPage={this.handleOpenPage} />;
//     }
//   }
// }

export default App;