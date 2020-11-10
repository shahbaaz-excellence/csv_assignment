import React, { useEffect, useState } from "react";
import "./downloadCSV.css";
import { Navbar, Nav, Button, Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetDataRequest, SendDataRequest } from "../Redux/actions";
import { CSVLink } from "react-csv";
import { CSVReader } from "react-papaparse";

const DownloadCSV = () => {
  const dispatch = useDispatch();
  const [list, setlist] = useState([]);
  const [itemList, setitemList] = useState([]);
  const [emptyCogs, setemptyCogs] = useState([]);
  const [filledCogs, setfilledCogs] = useState([]);
  const [cogValue, setcogValue] = useState();

  //____________________________// DOWNLOAD CSV__________________________________//

  useEffect(() => {
    dispatch(GetDataRequest());
  }, []);

  const dataitemList = useSelector(
    (state) => state.getDataStatus.dataList.response
  );

  useEffect(() => {
    setlist(dataitemList);
  }, [dataitemList]);

  //____________________________UPLOAD CSV__________________________________//

  let keys = [];
  let values = [];

  const handleOnDrop = (dataArrays) => {
    keys = dataArrays[0];
    values = dataArrays.splice(1, dataArrays.length);

    let newArray = [];

    values.forEach((item) => {
      let dataObject = {};
      item.data.forEach((val, valIndex) => {
        keys.data.forEach((key, keyIndex) => {
          if (keyIndex == valIndex) dataObject[key] = val;
        });
      });
      newArray.push(dataObject);
    });

    setitemList(newArray);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    // console.log(err)
  };

  //____________________________________EDIT CSV___________________________________//

  const submitCog = async (e, itemID) => {
    e.preventDefault();
    const newData = itemList.map((value) => {
      if (value.id === itemID) {
        return {
          ...value,
          cogs: cogValue,
        };
      } else {
        return value;
      }
    });
    await setitemList(newData);

    let cogUpdateValue = {
      id: itemID,
      cog: cogValue,
    };

    await dispatch(SendDataRequest(cogUpdateValue));
    setcogValue("");
    e.target.reset();
  };

  useEffect(() => {
    setfilledCogs(
      itemList.filter((item) => {
        if (item.cogs) {
          return item;
        }
      })
    );

    setemptyCogs(
      itemList.filter((item) => {
        if (!item.cogs) {
          return item;
        }
      })
    );
  }, [itemList]);






  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">COGS MANAGER</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>

      <div className="maindiv">
        <div className="content">
          {
            list && list.length > 0 ? (
              <CSVLink data={list}>
                <Button className="download_btn_success" variant="success">
                  Download CSV File
                </Button>
              </CSVLink>
            ) : null
          }

          {
            itemList && itemList.length > 0 ? (
              <CSVLink data={itemList}>
                <Button className="download_btn_success" variant="primary">
                  Updated CSV File
                </Button>
              </CSVLink>
            ) : null
          }

          <div className="upload_div">
            <div className="upload_btn">
              <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
              >
                <span>Click or Drag to upload.</span>
              </CSVReader>
            </div>
            <div>
              <h2 className="heading">
                Non-Empty Cogs : {filledCogs.length}
              </h2>

              {filledCogs.map((item, index) => {
                return (
                  <Jumbotron>
                    <div key={index}>
                      <div>
                        <p>{item.title}</p>
                        <p>Sku: {item.sku} </p>
                        <p>Price : {item.price}</p>
                      </div>
                      <div>
                        <p>COGS : {item.cogs}</p>
                      </div>
                    </div>
                  </Jumbotron>
                );
              })}
            </div>

            <div>
              <h2 className="heading">Empty Cogs : {emptyCogs.length}</h2>

              {emptyCogs.map((item, index) => {
                return (
                  <Jumbotron>
                    <div key={index}>
                      <div>
                        <p>{item.title}</p>
                        <p>Sku: {item.sku} </p>
                        <p>Price : {item.price}</p>
                      </div>
                      <div>
                        <p>
                          COGS :{" "}
                          <form onSubmit={(e) => submitCog(e, item.id)}>
                            <input
                              type="text"
                              onChange={(e) => setcogValue(e.target.value)}
                            />
                          </form>
                        </p>
                      </div>
                    </div>
                  </Jumbotron>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadCSV;
