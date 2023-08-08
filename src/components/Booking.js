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
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}

      >
        <h5>Restaurant</h5>
        <Form.Item name="rest_name">
          <Ddropdown />

        </Form.Item>
        <h5>Table Size:</h5>
        <Form.Item name="num_guests">
          <Slider min={0} max={10} />
        </Form.Item>
        <h5>Reservation Date</h5>
        <Form.Item name="date_picker">
          <DatePicker format="YYYY-MM-DD"/>
        </Form.Item>

        <h5>Time Slot</h5>
        <Form.Item name="time_slot">
          <Timepicker />
        </Form.Item>
        <h5>Agree to Pay Cancellation charges</h5>
        <Form.Item name="allow_cancellation" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item>
          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            I accept <a href="">terms</a> and conditions.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!componentDisabled} variant="outlined" color="error">Save</Button>
        </Form.Item>

      </Form>

    </>

  );
};
export default Booking;
