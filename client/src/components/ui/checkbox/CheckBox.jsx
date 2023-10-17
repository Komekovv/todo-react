import React from 'react';
import './style.css'

function CheckBox({isChecked}) {
    return (
        <div className="checkbox">
            <input id="form-checkbox-1" name="checkbox" type="checkbox" checked={isChecked ? true : false}/>
            <label for="form-checkbox-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200">
                    <mask fill="white" id="checkbox-mask"><rect height="200" width="200"></rect></mask>
                    <rect mask="url(#checkbox-mask)" strokeWidth="40" height="200" width="200"></rect>
                    <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64"></path>
                </svg>
            </label>
        </div>

    );
}

export default CheckBox;