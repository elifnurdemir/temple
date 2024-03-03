import React from "react";
import "../../assets/css/template.css";
import elifinfotosu from "../../assets/media/elifinfotosu.jpg";
import heart from "../../assets/media/heart.mp4";
import FlexRowPart from "../template-components/flex-parts/row-part/flexRowPart";
const Template = () => {



    const templateJson = {
        "UserData": {
            "Username": "metrosso",
            "Id": "123",
            "Email": "blabla@bla.com",
            "SubscribtionType": "Free"
        },
        "TemplateData": {
            "TemplateName": "LoremTemplate",
            "TemplateId": "123",
            "PartCount": "number(like: 3)",
            "Parts": [
                {
                    "PartId": "123",
                    "PartName": "LoremPartName",
                    "Type": "flex-row",
                    "ComponentCount": "3",
                    "Components": [
                        {
                            "ComponentId": "0",
                            "ComponentPriority": "1",
                            "ComponentName": "BlackSolidNormalBorderModernPhotoFrame",
                            "Parameters": {
                                "url": "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg"
                            }
                        },
                        {
                            "ComponentId": "2",
                            "ComponentPriority": "3",
                            "ComponentName": "TextArea",
                            "Parameters": {
                                "title": "Sonsuz Aşkın İfadesi: Seni Sevmek",
                                "content": "Sevgilim, her zaman kalbimde taşıdığım, hayatımın anlamı. Bugün sana bir kez daha seslenmek istiyorum, tüm içtenliğimle ve derin duygularımla. Seninle olan her anım, benim için bir armağan. Seninle yaşadığım her an, sonsuzluğa doğru bir yolculuk gibi. Senin sevgin, beni en saf duygularla dolduruyor. Ve bugün, bu mesajla sana tekrar hatırlatmak istiyorum: Seni seviyorum. Kalbim, ruhum ve her zerremle seninleyim. İyi ki varsın, iyi ki hayatımdasın. Her günümü seninle paylaşmak, benim için en büyük mutluluk. Sevgilim, sen benim için her şeyden değerlisin. İyi ki varsın, ve sonsuza dek seninle olmak dileğiyle..."
                            }
                        },
                        {
                            "ComponentId": "1",
                            "ComponentPriority": "2",
                            "ComponentName": "PaperPhotoFrame",
                            "Parameters": {
                                "url": "https://burst.shopifycdn.com/photos/love-letters-and-hearts.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                            }
                        },
                    ]
                },
                {
                    "PartId": "123",
                    "PartName": "LoremPartName",
                    "Type": "flex-row",
                    "ComponentCount": "3",
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
            ],
        }
    }

    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src={heart} type="video/mp4" />
            </video>
            <div className="big-title">Sevgililer Günü</div>
            <div className="template-column">




                {templateJson.TemplateData.Parts.map((part, index) => (
                    <FlexRowPart key={index} Components={part.Components} />
                ))}
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