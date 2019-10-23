import React, { Fragment, Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './index.css';

class ProductForm extends Component {
  state = {
    title: '',
    cost: '',
    size: '',
    imageUrl: ''
  };

  componentDidMount() {
    if (this.props.fetchedProduct) {
      const { title, cost, size, imageUrl } = this.props.fetchedProduct;

      this.setState({
        title,
        cost,
        size,
        imageUrl
      });
    }
  }

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
      imageUrl: '',
      file: ''
    });
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} className='form'>
          <FormGroup className='form-group'>
            <Label>Title</Label>
            <Input
              style={{ height: '40px' }}
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
              value={this.state.size}
              onChange={this.handleChange}
              className='input-fields'
              type='select'
              name='size'
            >
              <option>s</option>
              <option>l</option>
              <option>m</option>
              <option>ml</option>
              <option>xl</option>
              <option>xs</option>
              <option>xxl</option>
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
