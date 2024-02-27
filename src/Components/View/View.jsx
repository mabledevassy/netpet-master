import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./View.css";
import { Buffer } from "buffer";
import styled from "@emotion/styled";
import { yellow } from "@mui/material/colors";

const View = () => {
    const navigate = useNavigate()


    const handleClick = (id) => {
  
      console.log(id)
      navigate(`/buy/${id}`)
  
    }
  

  const [viewData, setViewData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/view1/${id}`).then(({ data }) => {
      setViewData(data);
      console.log(data.image1.data.data);
    });
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <img src={`data:image/jpeg;base64,${Buffer.from(viewData.image1.data.data).toString('base64')}`}
                                    width="50" height="50" alt="Error"/> */}

      <div className="i">
        {viewData.image1 && (
          <img
           
            src={`data:image/jpeg;base64,${Buffer.from(
              viewData.image1.data.data
            ).toString("base64")}`}
            width="200px"
            height="auto"
            alt="Error"
          />
        )}
        <div className="u">&#8377;{viewData.Price}</div>

        <Button onClick={() => handleClick(viewData._id)} variant="contained">Buy Now</Button>
      </div>

      <div className="p">
        <h3>{viewData.Subcategory}</h3>
        <p className="t">{viewData.Category}</p>
        <p className="r">{viewData.Description}</p>
      </div>
    </div>
  );
};

export default View;
