import React from 'react';
import { CSVReader } from "react-papaparse";

function Uploadbtn(props) {
    return (
        <>
            <CSVReader
                onDrop={props.handleOnDrop}
                onError={props.handleOnError}
                addRemoveButton
            >
                <span>Click or Drag to upload.</span>
            </CSVReader>
        </>
    )
}

export default Uploadbtn
