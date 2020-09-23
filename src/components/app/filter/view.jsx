import './style.scss';
import React, { Component } from 'react';
import {
  PageHeader,
  Button,
  Form,
  Input,
  Tooltip,
  Select,
  Checkbox,
  List,
  Card,
} from 'antd';
import {
  ReloadOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { GENDER } from '../../../constants/gender';
import { NATIONALITIES } from '../../../constants/nationalities';


class View extends Component {
  state={
    searchName:'',
    searchGender:'',
    searchNationality:''
  }
  componentDidMount(){
    
  
   
  // this.setState({nationalitiesToSelect})
    
  }
  
 
  render() {
    const ButtonGroup = Button.Group;
    const { Option } = Select;

    const nationalitiesToSelect = [];
    for (let key in NATIONALITIES) {
      nationalitiesToSelect.push(NATIONALITIES[key].name);
    }


  return (
    <div className={'page-contacts-container'}>
      <PageHeader
        className={'page_header'}
        goBack={false}
        title="Contacts"
        extra={[
          <div key="1" className={'buttons_container'}>
            <Tooltip title="Refresh">
              <Button type="dashed" shape="circle" icon={<ReloadOutlined />} />
            </Tooltip>
            <ButtonGroup>
              <Tooltip title="Grid">
                <Button icon={<AppstoreOutlined />} id="tableView" />
              </Tooltip>
              <Tooltip title="List">
                <Button icon={<UnorderedListOutlined />} id="listView" />
              </Tooltip>
            </ButtonGroup>
          </div>,
        ]}
      />
      <div className={'filter-container'}>
        <Form
          className={'ant-col _flex-grow'}
          layout="vertical"
        >
          <Form.Item name="search">
            <Input allowClear placeholder="Search by full name" />
          </Form.Item>
          <Form.Item
            className={'ant-col ant-col-xs-24 ant-col-sm-10 ant-col-lg-4'}
            name="gender"
            rules={[{ message: 'Gender!' }]}
          >
            <Select placeholder="Gender">
              {Object.entries(GENDER).map(el => {
                return (
                  <Option key={el[0]} value={el[0]}>
                    {el[1].charAt(0).toUpperCase() + el[1].slice(1)}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            className={'ant-col ant-col-xs-24 ant-col-sm-14 ant-col-lg-5'}
            name="nationality"
            rules={[{ message: 'nationality', type: 'array' }]}
          >
            <Select mode="multiple" placeholder="Nationality" allowClear>
              {nationalitiesToSelect.map(el => {
                return (
                  <Option key={el} value={el}>
                    {el}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Checkbox  style={{ lineHeight: '32px' }}>
            <span>I am creator</span>
          </Checkbox>
          <Button
            type="default"
            icon={<CloseOutlined />}
            className={'clear_button'}
          >
            Clear
          </Button>
        </Form>
      </div>
    
    </div>
  );
};
}

export  {View};