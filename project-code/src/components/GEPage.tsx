import * as React from "react";

import Input from './parts/Input';
import Table from './parts/Table';


class GEPage extends React.Component <{}> {

    public state = {
        day30: undefined,
        dayTrend: undefined,
        error: undefined,
        id: undefined,
        members: undefined,
        name: undefined,
        price: undefined,
        rows : [{"id": "4151", "name": "Abyssal Whip", "members": "true", "price": "2.8m", "daytrend": "-4,688", "day30": "-12.0%"}],
      }

    public getItem = async (e:any) => {
        e.preventDefault(e);

        let testdata:any={"id": "", "name": "", "members": "", "price": "", "daytrend": "", "day30": ""};

        const item = e.target.elements.itemname.value;
        const apiUrl = 'https://cors-anywhere.herokuapp.com/' + 'services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=' + item;
       
        const apiCall = await fetch(apiUrl, {headers :  {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"}});
        const data = await apiCall.json();

        const testing = {"id": data.item.id, "name": data.item.name, "members" : data.item.members, "price" : data.item.current.price, "daytrend" : data.item.today.price, "day30" : data.item.day30.change };

        if(data != null)
        {
          testdata = this.state.rows;
          testdata.push(testing);
        }

        if (item) {
          this.setState({
            day30: data.item.day30.change,
            dayTrend: data.item.today.price,
            error: "",
            id: data.item.id,
            members: data.item.members,
            name: data.item.name,
            price: data.item.current.price,
            rows: testdata,
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
            rows : [{ "id": "error", "name": "error", "members" : "error", "price" : "0", "daytrend" : "0%", "day30" : "0"  }],
          });
        }

        // tslint:disable-next-line:no-console
        console.log(data);
    }

  public render() {
    return (
    <div className='centreText'>
      <div margin-top='100'>
        <Input getItem={this.getItem}/>
      </div>
      <Table 
          rows = {this.state.rows}
        />
    </div>
    );
  }
};


/*
  
*/

export default GEPage;