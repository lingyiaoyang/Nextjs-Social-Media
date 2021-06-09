import React from 'react';
import Link from 'next/link';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form style={{ padding: '15px' }}>
      <FormGroup row>
        <Label for='exampleEmail' sm={2} size='lg'>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='Email'
            bsSize='lg'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='exampleEmail2' sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type='password'
            name='password'
            id='exampleEmail2'
            placeholder='password'
          />
        </Col>
      </FormGroup>
      <div
        style={{
          // border: '1px solid red',
          marginTop: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: '',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
        already have account?
        <Link href='/login'>Sign In</Link>
      </div>
    </Form>
  );
};

export default Example;
