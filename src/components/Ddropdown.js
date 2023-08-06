import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from "react-select";


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
                    // console.log(response.data.data)
                    // console.log(typeof (response.data.data))
                    setOptionList(response.data.data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    var arr = [];
    for (var i = 0; i < optionList.length; i++) {
        arr.push({ value: optionList[i].rest_id, label: optionList[i].rest_name });
    }

    useEffect(() => {
        fetchData();
    }, [])

    function handleSelect(data) {
        setSelected(data);
    }

    if (optionList.length > 0) {

        return (
            <div>
                <Select
                    options={arr}
                    placeholder="Pick your Restaurant"
                    value={select}
                    onChange={handleSelect}
                    isSearchable={true}
                />
            </div>
        );
    }
}

export default Ddropdown;