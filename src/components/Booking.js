import React, { useState } from 'react';
import Ddropdown from '../components/Ddropdown'

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import Timepicker from './Timepicker';


function Booking() {

  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <Form
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <h5>Restaurant</h5>
        <Form.Item>
          <Ddropdown />

        </Form.Item>
        <h5>Table Size:</h5>
        <Form.Item >
          <Slider />
        </Form.Item>
        <h5>Reservation Date</h5>
        <Form.Item>
          <DatePicker />
        </Form.Item>

        <h5>Time Slot</h5>
        <Form.Item>
          <Timepicker />
        </Form.Item>
        <h5>Agree to Pay Cancellation charges</h5>
        <Form.Item valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        I accept <a href="">terms</a> and conditions.
      </Checkbox>
      <Button disabled={!componentDisabled} variant="outlined" color="error">Save</Button>
    </>

  );
};
export default Booking;