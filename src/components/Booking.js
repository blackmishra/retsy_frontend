import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Card, Space } from 'antd';

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

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function Booking() {
  // console.log(allRestList)
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
        <h5>Select Restaurant</h5>

        {/* <Form.Item>
          <Select>
            <Select.Option value={restData}>Demo</Select.Option>
            {allRestList.map((item) => {
              return <option key={item.rest_id}>{item.rest_name}</option>
            })}
          </Select>
          <Ddlist restData = {restData}/>
        </Form.Item> */}
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

        {/* <Form.Item>
          <Button>Save</Button>
        </Form.Item> */}
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