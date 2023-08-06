import React from 'react'

function Rating({ value }) {
    let val = value
    // console.log('Printing from Rating')
    // console.log(value)
    let str_val = val.toString()
    let arr_val = str_val.split('.')
    let main_val = parseInt(arr_val[0])
    let sub_val = parseInt(arr_val[1])

    let rating_classes = []
    for (let i = 0; i < main_val; i++) {
        rating_classes.push('fa fa-star')
    }
    if (sub_val >= 5) {
        rating_classes.push('fas fa-star-half-alt')
    }
    else {
        
        rating_classes.push('fa-regular fa-star')
    }
    return (
        <span>
            {rating_classes.map(function (rating_class, indx) {
                return (
                    <i id='rating-tag' 
                    className={rating_class}
                    key={indx}></i>
                )
            }
            )}
        </span>
    )
}
export default Rating
