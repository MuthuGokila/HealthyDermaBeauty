import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/Mehandi1.png";
import Pdf1 from "../../editable-stuff/Mehand2.png";
import HairDo from "../../editable-stuff/HairDo.png";
import HairStyle from "../../editable-stuff/HairStyle.png";
import MakeUp from "../../editable-stuff/Makeup.png";
import SareeDropping from "../../editable-stuff/SareeDropping.png";
import SkinTreatment from "../../editable-stuff/SkinTreatment.png";
import CustomizedFacial from "../../editable-stuff/CustomizedFacial.png";

const ProjectCard = ({  }) => {
  // 

  return (
    <div style={{color: "white" ,background:'', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}} vertical-align= "middle"className="col-md-12" >
      <div style={{backgroundColor: "black", alignItems: 'center'}} className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" al,t="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
          <h1 className="card-title" style={{color: "grey" ,background:'', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Mehandi Hand"} </h1>
          <img class= 'center' src={Pdf1} height={"600"} width={"850"} />            
        </div>
     </div>

      <div style={{backgroundColor: "black",alignItems: 'center',}} className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" ,background:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Mehandi Leg"} </h1>
          <img class= 'center' src={Pdf} height={"600"} width={"850"} />            
        </div>
      </div>
        
      <div style={{backgroundColor: "black",alignItems: 'center'}} className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" ,background:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Hair Do"} </h1>
          <img class= 'center' src={HairDo} height={"600"} width={"850"} />            
        </div>
      </div>
      <div style={{backgroundColor: "black",alignItems: 'center',}}  className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" ,background:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Hair Style"} </h1>
          <img class= 'center' src={HairStyle} height={"600"} width={"850"} />            
        </div>
      </div>

      <div style={{backgroundColor: "black",alignItems: 'center'}}  className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" ,background:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Make Up"} </h1>
          <img class= 'center' src={MakeUp} height={"600"} width={"850"} />            
        </div>
      </div>

      <div style={{backgroundColor: "black",alignItems: 'center'}}  className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" ,background:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Saree Dropping"} </h1>
          <img class= 'center' src={SareeDropping} height={"600"} width={"850"} />            
        </div>
      </div>

      <div style={{backgroundColor: "black",alignItems: 'center'}}  className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" ,background:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Skin Treatment"} </h1>
          <img class= 'center' src={SkinTreatment} height={"600"} width={"850"} />            
        </div>
      </div>

      <div style={{backgroundColor: "black",alignItems: 'center'}}  className="card shadow-lg p-3 mb-5 bg-blue rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div text-align= "center"  vertical-align= "middle" className="card-body">
        <h1 className="card-title" style={{color: "grey" , background:'black', borderImage:'black', textAlign:'center', fontWeight:'bold', fontFamily:'broadway'}}>{"Customized Facial"} </h1>
           <img class= 'center' src={CustomizedFacial} height={"600"} width={"850"} />            
        </div>
      </div>
    </div>
    
  );

};

export default ProjectCard;
