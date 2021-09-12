import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faFingerprint, faCommentDots, faQuestionCircle, faCog, faChevronDown} from '@fortawesome/free-solid-svg-icons';


function Navbar(){
    return(
        <nav class="navbar">
            <FontAwesomeIcon className="double-arrow-icon" icon={faAngleDoubleRight}/>
            <FontAwesomeIcon className="finger-print-icon" icon={faFingerprint} />
            <h3>Attendance</h3>
            <FontAwesomeIcon className="comment-icon" icon={faCommentDots} />
            <FontAwesomeIcon className="question-icon" icon={faQuestionCircle} />
            <FontAwesomeIcon className="cog-icon" icon={faCog} />
            <h5>50,000</h5>
            <FontAwesomeIcon className="chevron-down-icon" icon={faChevronDown} />
        </nav>
    );
}

export default Navbar;