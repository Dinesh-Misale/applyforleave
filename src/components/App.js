import React from "react";
import { faBars, faCircle, faUser, faFingerprint} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
function App(){
  return(
    <div class="icon-div">
      <FontAwesomeIcon class="bocks-icon" icon={faBars} />
      <FontAwesomeIcon className="circle-icon" icon={faCircle} />
      <FontAwesomeIcon className="user-icon" icon={faUser} />
      <FontAwesomeIcon className="sensor" icon={faFingerprint} />
      <FontAwesomeIcon className="sensor-2" icon={faFingerprint} />
      
    </div>
  );
}

export default App;