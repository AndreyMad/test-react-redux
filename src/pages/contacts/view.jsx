import React, { Component } from 'react';
import { Filter } from '../../components/app/filter';
import { GridContacts } from '../../components/app/gridContacts';
import { TableContacts } from '../../components/app/tableContacts';

class Contacts extends Component {
  state = {
    searchName: '',
    searchGender: '',
    serchNationality: [],
    filteredUsers: [],
  };

  filter = objectFilter => {
    // console.log(Object.keys(objectFilter));
    let { users } = this.props;
    // console.log(objectFilter);

    // const filtered = Object.keys(objectFilter).map(filterName => {
    //   let filteredUsers = [];
    //   switch (filterName) {
    //     case 'name':
    //         console.log('name');
    //       filteredUsers = users.filter(
    //         user =>
    //           user.name.first
    //             .toLowerCase()
    //             .includes(objectFilter[filterName].toLowerCase()) ||
    //           user.name.last
    //             .toLowerCase()
    //             .includes(objectFilter[filterName].toLowerCase()),
    //       );
    //       this.setState({ filteredUsers });
    //       break;
    //     case 'nationality':
    //       console.log('nationality');
    //       filteredUsers = users.filter(
    //         user =>
    //           user.gender.toLowerCase() === objectFilter.gender.toLowerCase(),
    //       );
    //       this.setState(prevState => ({
    //         filteredUsers: [ ...filteredUsers],
    //       }));
    //       break;
    //     default:
    //       return users;
    //   }
    //   // users.filter((item)=>( item[filterName] ===  objectFilter[filterName]))
    // });
  };

  foo = () => {
    const { getUsers } = this.props;
    getUsers();
  };
  render() {
    const { users } = this.props;
    const { filteredUsers } = this.state;
    return (
      <div className={'page_contacts'}>
        <button
          onClick={this.foo}
          style={{ width: '100px', height: '50px' }}
        ></button>
        <Filter filter={this.filter} />
        {users.length > 0 ? (
          <GridContacts
            contacts={filteredUsers.length > 0 ? filteredUsers : users}
          />
        ) : null}
      </div>
    );
  }
}

export { Contacts };
