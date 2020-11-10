import React from 'react';
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

function Downloadbtn(props) {
    return (
        <>
            {
                props.list && props.list.length > 0 ? (
                    <CSVLink data={props.list}>
                        <Button className="download_btn_success" variant="success">
                            Download CSV File
                </Button>
                    </CSVLink>
                ) : null
            }
            {
                props.itemList && props.itemList.length > 0 ? (
                    <CSVLink data={props.itemList}>
                        <Button className="download_btn_success" variant="primary">
                            Updated CSV File
                </Button>
                    </CSVLink>
                ) : null
            }
        </>
    )
}

export default Downloadbtn;
