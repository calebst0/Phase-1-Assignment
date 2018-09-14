/* import * as React from "react";

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
        e.preventDefault();
        
        const apiCall = await fetch(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=4151`);
        const data = await apiCall.json();
        
        // tslint:disable-next-line:no-console
        console.log(data);
    }

  public render() {
    return (
    <div className='centreText'>
      <Input getItem={this.getItem}/>
      <FirstComponent />
    </div>
    );
  }
};

export default GEPage; */