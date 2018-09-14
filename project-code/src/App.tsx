import * as React from "react";

import FirstComponent from './components/parts/FirstComponent';
import Input from './components/parts/Input';


class App extends React.Component {

    public state = {
        day30: undefined,
        dayTrend: undefined,
        error: "",
        id: undefined,
        members: undefined,
        name: undefined,
        price: undefined,
      }
      public getItem = async (e:any) => {
        e.preventDefault();
        const geID = e.target.elements.city.value; 
        const apiCall = await fetch(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${geID}`);
        const data = await apiCall.json();
        if (geID) {
          this.setState({
            day30: data.day30.change,
            dayTrend: data.today.price,
            error: "",
            id: data.id,
            members: data.members,
            name: data.name,
            price: data.current.price,
          });
        } else {
          this.setState({
            day30: undefined,
            dayTrend: undefined,
            error: "Please enter a value",
            id: undefined,
            members: undefined,
            name: undefined,
            price: undefined,
          });
        }
    }


  public render() {
    return (
    <div>
      <div className='centreText'><Input /></div>
      <FirstComponent/>
    </div>
    );
  }
};

export default App;