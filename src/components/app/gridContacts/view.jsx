import './style.scss';
import React,{Component} from 'react';
import { List, Card, Typography,Tag } from 'antd';
import {NATIONALITIES} from '../../../constants/nationalities';
class View extends Component {
state={
  pageSize:10,
  curentPage:1
}



 
  render (){
    const {contacts,isLoading}=this.props
    const { Meta } = Card;
    const {pageSize,curentPage}=this.state
    const { Paragraph, Link } = Typography;
  return (
    <div className={'contacts-wrapper'}>
      <List
        grid={{ gutter: 16 }}
        loading={isLoading}
        dataSource={contacts}
        pagination={{
          onShowSizeChange: (current, pageSize)=> {
            this.setState({pageSize})
          },
          onChange: page => {
           this.setState({curentPage:page})
          },
          defaultCurrent:curentPage,
          pageSize: pageSize,
        }}        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              
              style={{ width: ' 100% ' }}
              cover={<img alt="example" src={item.picture.large} />}>
              <Meta
                title={`${item.name.title}. ${item.name.first} ${item.name.last} `}
              />
              <small>{`(${item.dob.age} years)`}</small>
              <Paragraph copyable={{ text: item.email }}>
                <Link href={`mailto:${item.email}`}>
                  {item.email}
                </Link>
              </Paragraph>
              <Paragraph copyable={{ text: item.phone }}>
                <Link href={`tel:${item.phone}`}>
                  {item.phone}
                </Link>
              </Paragraph>
              <Paragraph
                copyable={{ text: `/${item.location.country}/ ${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.postcode}` }}>
                <span>/{item.location.country}/</span><br />
                <span>{`${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.postcode}`}</span>
              </Paragraph>
              <Tag color={`${NATIONALITIES[item.nat].color}`}>{`${NATIONALITIES[item.nat].name}`}</Tag>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
}
export { View };
