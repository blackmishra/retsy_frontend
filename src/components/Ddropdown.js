import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Ddropdown(props) {
    const [select, setSelected] = useState('');
    const [optionList, setOptionList] = useState([] | null);
    const fetchData = () => {
        axios
            .get('http://localhost:8000/')
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    console.log(response.data.data)
                    console.log(typeof (response.data.data))
                    setOptionList(response.data.data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, [])

    if (optionList.length > 0) {

        return (
            <div>
                <select
                    classNames={{
                        control: (state) => state.isFocused ? 'border-red-600' : 'border-grey-300',
                    }}>
                    {optionList.map(addItem)}
                </select>

            </div>
        );
    }
}

function addItem(item) {
    console.log(item)
    return (
        <option key={item.rest_id} value={item.rest_id}>
            {item.rest_name}
        </option>
    )

}


export default Ddropdown;