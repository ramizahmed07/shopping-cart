import React, { Fragment, Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './index.css';

class ProductForm extends Component {
  state = {
    title: '',
    cost: null,
    size: '',
    imageUrl: '',
    file: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ imageUrl: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      cost: null,
      size: '',
      imageUrl: ''
    });
  };

  render() {
    return (
      <Fragment>
        <h3 className='form-title'>Create a product</h3>
        <Form onSubmit={this.handleSubmit} className='form'>
          <FormGroup className='form-group'>
            <Label>Title</Label>
            <Input
              value={this.state.title}
              onChange={this.handleChange}
              className='input-fields'
              type='textarea'
              name='title'
              placeholder='title of a product'
            />
          </FormGroup>
          <FormGroup>
            <Label>Cost</Label>
            <Input
              value={this.state.cost}
              onChange={this.handleChange}
              className='input-fields'
              type='number'
              name='cost'
              placeholder='cost of a product'
            />
          </FormGroup>
          <FormGroup>
            <Label>Size</Label>
            <Input
              value='{this.state.size}'
              onChange={this.handleChange}
              className='input-fields'
              type='select'
              name='size'
            >
              <option value='s'>S</option>
              <option value='l'>L</option>
              <option value='m'>M</option>
              <option value='ml'>ML</option>
              <option value='xl'>XL</option>
              <option value='xs'>XS</option>
              <option value='xxl'>XXL</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>File</Label>
            <Input
              onChange={this.onImageChange}
              className='input-fields file'
              type='file'
            />
          </FormGroup>
          <Button className='submit-btn'>Create</Button>
        </Form>
      </Fragment>
    );
  }
}

export default ProductForm;
