import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo, faFileAlt, faVolumeUp, faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "../../assets/css/templateSidebar.css";

const TemplateSidebar = () => {
    const itemTypeList = [
        { icon: faCamera, title: "Fotograf" },
        { icon: faVideo, title: "Video" },
        { icon: faFileAlt, title: "Metin" },
        { icon: faVolumeUp, title: "Ses" },
        { icon: faLink, title: "Link" },
        { icon: faTwitter, title: "Twitter" },
        { icon: faInstagram, title: "Instagram" },
        { icon: faYoutube, title: "YouTube" },
        { icon: faFacebook, title: "Facebook" }
    ];

    return (
        <div className="template-creation-sidebar">
            {itemTypeList.map((item, index) => (
                <div key={index} className="template-creation-sidebar-item-type-row">
                    <FontAwesomeIcon className="template-creation-sidebar-item-type-icon" icon={item.icon} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default TemplateSidebar;
