import './style.scss';
import React from 'react';
import { List, Card, Typography } from 'antd';
const View = React.memo((props) => {
  const data = [
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Sarah',
        last: 'Singh',
      },
      location: {
        street: {
          number: 3669,
          name: 'Main Street East',
        },
        city: 'Upper Hutt',
        state: 'Tasman',
        country: 'New Zealand',
        postcode: 20869,
        coordinates: {
          latitude: '59.0959',
          longitude: '104.9153',
        },
        timezone: {
          offset: '+4:30',
          description: 'Kabul',
        },
      },
      email: 'sarah.singh@example.com',
      login: {
        uuid: 'da6a57dc-17fd-4596-9db3-226ceec7b877',
        username: 'browndog259',
        password: 'pics',
        salt: 'C9ZuKzwY',
        md5: '98b75e4997af004bc0e18c71539faba7',
        sha1: '826e4c464f2d0a56d698fe9fcd304148af5b6066',
        sha256:
          '0596caa7ff4c4676cf59d8f23e5089df45f23dc7806f45cd0d5feea04879bbbc',
      },
      dob: {
        date: '1965-04-29T04:49:33.271Z',
        age: 55,
      },
      registered: {
        date: '2015-12-16T21:37:59.266Z',
        age: 5,
      },
      phone: '(974)-754-4760',
      cell: '(123)-877-6791',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/86.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/86.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/86.jpg',
      },
      nat: 'NZ',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Cléo',
        last: 'Garcia',
      },
      location: {
        street: {
          number: 7887,
          name: 'Avenue du Château',
        },
        city: 'Tours',
        state: 'Loire',
        country: 'France',
        postcode: 63640,
        coordinates: {
          latitude: '43.5509',
          longitude: '58.4752',
        },
        timezone: {
          offset: '+5:00',
          description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
        },
      },
      email: 'cleo.garcia@example.com',
      login: {
        uuid: '1346cbba-cf27-4525-ac0f-89467d8177c4',
        username: 'crazyostrich351',
        password: 'rommel',
        salt: 'qxEZIhCD',
        md5: 'ca7e178542e6a93d422a93b914efcd3a',
        sha1: '74844039098ed8dcab307d9aa8d2d238e69789c0',
        sha256:
          'b0abd27c8cf9021ec5e75e6024c86fa4bcde8b4feb92d14439a690a8bfcc1d1e',
      },
      dob: {
        date: '1951-08-08T04:24:31.678Z',
        age: 69,
      },
      registered: {
        date: '2017-03-09T00:15:53.344Z',
        age: 3,
      },
      phone: '01-93-54-60-55',
      cell: '06-26-81-63-70',
      id: {
        name: 'INSEE',
        value: '1NNaN69481097 44',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/18.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/18.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/18.jpg',
      },
      nat: 'FR',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Joseph',
        last: 'Romero',
      },
      location: {
        street: {
          number: 6998,
          name: 'Adams St',
        },
        city: 'Coffs Harbour',
        state: 'Australian Capital Territory',
        country: 'Australia',
        postcode: 3701,
        coordinates: {
          latitude: '31.5354',
          longitude: '-79.2785',
        },
        timezone: {
          offset: '-4:00',
          description: 'Atlantic Time (Canada), Caracas, La Paz',
        },
      },
      email: 'joseph.romero@example.com',
      login: {
        uuid: '2d30e596-9088-439d-ab6b-0af7d20fb690',
        username: 'heavybutterfly992',
        password: '7777777',
        salt: 'mn7TxqdS',
        md5: '628786ebc1a269b0c8b4baf897161ba2',
        sha1: 'dc5e72069a089048a2819a2808598c3df7463a60',
        sha256:
          '29bd3af60c201f50b2d3894a485da0771900bfc1de907739ef823fe089fb99a4',
      },
      dob: {
        date: '1958-12-10T20:41:18.536Z',
        age: 62,
      },
      registered: {
        date: '2005-03-23T07:00:34.294Z',
        age: 15,
      },
      phone: '01-2959-5013',
      cell: '0424-308-209',
      id: {
        name: 'TFN',
        value: '557495705',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/8.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/8.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/8.jpg',
      },
      nat: 'AU',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Amélie',
        last: 'Simon',
      },
      location: {
        street: {
          number: 3716,
          name: 'Rue Bony',
        },
        city: 'Montpellier',
        state: 'Allier',
        country: 'France',
        postcode: 97743,
        coordinates: {
          latitude: '-34.8655',
          longitude: '16.1812',
        },
        timezone: {
          offset: '-3:00',
          description: 'Brazil, Buenos Aires, Georgetown',
        },
      },
      email: 'amelie.simon@example.com',
      login: {
        uuid: 'c4b04033-3fb6-440b-871f-42123e8f8126',
        username: 'smallgoose660',
        password: 'hootie',
        salt: 'p4y2PDso',
        md5: 'dc01f89b4e7c8aee745b9c5a77480374',
        sha1: '8e480b465aba325ac2d8e69d5185ad072800ff3f',
        sha256:
          '3a84e23626615ed4d6f8442f71a835b50188386a90f9b4c606f14561cf182fc9',
      },
      dob: {
        date: '1985-05-01T07:14:14.296Z',
        age: 35,
      },
      registered: {
        date: '2007-04-11T03:54:11.166Z',
        age: 13,
      },
      phone: '02-38-12-96-17',
      cell: '06-24-91-29-88',
      id: {
        name: 'INSEE',
        value: '2NNaN77768623 66',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/80.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/80.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg',
      },
      nat: 'FR',
    },
  ];
  const { Meta } = Card;
  const { Paragraph, Link } = Typography;
  console.log(props)
  return (
    <div className={'contacts-wrapper'}>
      <List
        grid={{ gutter: 16 }}
        dataSource={data}
        renderItem={item => (
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
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
});

export { View };
