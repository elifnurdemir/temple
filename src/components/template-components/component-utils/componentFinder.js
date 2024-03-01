import React from 'react';
import TextAreaTitle from '../text-areas/titles/textAreaTitle';
import TextAreaContent from '../text-areas/paragraphs/textAreaContent';
import PaperPhotoFrame from '../frames/photo/paper/paperPhotoFrame';
import TextArea from '../text-areas/text-combinations/textArea';
import BlackSolidNormalBorderModernPhotoFrame from '../frames/photo/modern/black/blackSolidNormalBorderModernPhotoFrame';

const componentListByName = {
    "TextAreaTitle": TextAreaTitle,
    "TextAreaContent": TextAreaContent,
    "PaperPhotoFrame": PaperPhotoFrame,
    "TextArea" : TextArea,
    "BlackSolidNormalBorderModernPhotoFrame": BlackSolidNormalBorderModernPhotoFrame,
}

//paperPhotoFrame
export function getComponentByName(componentName){
    if(componentListByName.hasOwnProperty(componentName)){
        return componentListByName[componentName];
    }
    return null;
}

//textarea
//Textareacontent
//Paperphotoframe