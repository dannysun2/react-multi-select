import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import MultiSelect from '@kenshooui/react-multi-select';
import '@kenshooui/react-multi-select/dist/style.css';
import { Container, Form } from 'semantic-ui-react';

class App extends Component {
  state = {
    options: [
      { id: 1, name: 'Danny', zipCode: '75082', job: 'programmer' },
      { id: 2, name: 'Angela', zipCode: '75048', job: 'operations' },
      { id: 3, name: 'Thomas', zipCode: '75215', job: 'programmer' },
      { id: 4, name: 'Kelly', zipCode: '75215', job: 'operations' },
      { id: 5, name: 'Bob', zipCode: '75082', job: 'cashier' },
      { id: 6, name: 'Richard', zipCode: '77002', job: 'plumber' },
      { id: 7, name: 'John Doe', zipCode: '77001', job: 'CEO' }
    ]
  };

  handleOptions(item) {
    const options = this.state.options.filter(loc => loc.id !== item.id);
    this.setState({ options });
  }

  render() {
    const availableZipCodes = _.uniq(
      this.state.options.map(option => option.zipCode)
    ).map((zipCode, index) => {
      return { id: index, label: zipCode };
    });

    const availableJobs = _.uniq(
      this.state.options.map(option => option.job)
    ).map((job, index) => {
      return { id: index, label: job };
    });

    return (
      <div>
        {this.state.options.map((item, index) => (
          <li key={item.id} onClick={() => this.handleOptions(item)}>
            {' '}
            {item.name}{' '}
          </li>
        ))}

        <Container>
          <Form.Field>
            <label>Postal Codes</label>
            <MultiSelect
              items={availableZipCodes}
              selectedItems={availableZipCodes}
              responsiveHeight={300}
              itemHeight={30}
              showSearch={false}
            />
          </Form.Field>

          <br />

          <Form.Field>
            <label>Postal Codes</label>
            <MultiSelect
              items={availableJobs}
              selectedItems={availableJobs}
              responsiveHeight={300}
              itemHeight={30}
              showSearch={false}
            />
          </Form.Field>
        </Container>
      </div>
    );
  }
}

export default App;
