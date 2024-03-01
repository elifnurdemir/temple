import React from "react";
import "../../assets/css/template.css";
import elifinfotosu from "../../assets/media/elifinfotosu.jpg";
import heart from "../../assets/media/heart.mp4";
import FlexRowPart from "../template-components/flex-parts/row-part/flexRowPart";
const Template = () => {


    const testJson = {
        "Components": [
            {
                "ComponentId": "0",
                "ComponentPriority": "1",
                "ComponentName": "BlackSolidNormalBorderModernPhotoFrame",
                "Parameters": {
                    "url": "https://w.wallhaven.cc/full/we/wallhaven-wevk5r.jpg"
                }
            },
            {
                "ComponentId": "2",
                "ComponentPriority": "3",
                "ComponentName": "TextArea",
                "Parameters": {
                    "title": "bu basligi ben yazdim",
                    "content": "bu bir paragraftir"
                }
            },
            {
                "ComponentId": "1",
                "ComponentPriority": "2",
                "ComponentName": "PaperPhotoFrame",
                "Parameters": {
                    "url": "https://w.wallhaven.cc/full/gp/wallhaven-gpxl97.jpg"
                }
            },
            

        ]
    }














    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src={heart} type="video/mp4" />
            </video>
            <div className="big-title">Sevgililer Günü</div>
            <div className="template-column">


       


                <FlexRowPart Components={testJson.Components} />
                {/*
                                 <TemplatePart title={"deliiiiiiiie"} paragraf={"mert benim hayatımın aşkı"} foto={elifinfotosu} />

                <TemplatePart title={"ooh la la"} paragraf={"hasta la vista baby"} foto={elifinfotosu} />

                <TemplatePart title={"müzeyyen senar"} paragraf={"fikrimin ince gülü"} foto={elifinfotosu} />
                 */}





            </div>
        </>
    )
}
export default Template;