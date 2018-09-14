import * as React from "react";

import FirstComponent from './parts/FirstComponent';
import Input from './parts/Input';

class GEPage extends React.Component {

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
        e.preventDefault(e);

        const item = e.target.elements.itemname.value;
        const apiUrl = 'https://cors-anywhere.herokuapp.com/' + 'services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=' + item;
       
        const apiCall = await fetch(apiUrl, {headers :  {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"}});
        const data = await apiCall.json();

        if (item) {
          this.setState({
            day30: data.item.day30.change,
            dayTrend: data.item.today.price,
            error: "",
            id: data.item.id,
            members: data.item.members,
            name: data.item.name,
            price: data.item.current.price,
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

        // tslint:disable-next-line:no-console
        console.log(data);
    }

  public render() {
    return (
    <div className='centreText'>
      <Input getItem={this.getItem}/>
        <FirstComponent 
          day30={this.state.day30}
          dayTrend= {this.state.dayTrend}
          error= {this.state.error}
          id= {this.state.id}
          members= {this.state.members}
          name= {this.state.name}
          price= {this.state.price}
        />
    </div>
    );
  }
};

export default GEPage;