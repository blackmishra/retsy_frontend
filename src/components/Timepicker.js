import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const format = 'HH:mm';
const Timepicker = () => <TimePicker.RangePicker defaultValue={dayjs('12:08', format)} format={format} minuteStep={15}/>;
export default Timepicker;