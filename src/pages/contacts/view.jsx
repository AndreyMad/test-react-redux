import React, { Component } from 'react';
import {Filter} from '../../components/app/filter';
import {GridContacts} from '../../components/app/gridContacts'
import {TableContacts} from '../../components/app/tableContacts'

class View extends Component {
    state={
        searchName:'',
        searchGender:'',
        serchNationality:[]
    }
    searchHandler=()=>{
        // console.log('asd');
    }

    foo=()=>{
        const {getUsers}=this.props
        getUsers()
    }
    render (){
        const {users}=this.props
        return (
            <div className={'page_contacts'}>
                <button onClick={this.foo} style={{width:'100px', height:'50px'}}></button>
                <Filter searchHandler={this.searchHandler}/>
              {users.length>2?<GridContacts contacts={users}/>:null} 
            </div>
        );

    }
	
};

export { View };
