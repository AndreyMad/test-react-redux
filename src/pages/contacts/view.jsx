import React from 'react';
import {Filter} from '../../components/app/filter';
import {Contacts} from '../../components/app/contacts'
const View = () => {
	return (
        <div className={'page_contacts'}>

            <Filter/>
            <Contacts/>
        </div>
	);
};

export { View };