import Rect from "react";
import Table from "./table";
import App from "./App";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Final(){
    return(
        <div className="final-div">
            <div className="first-half">
                <h4>September</h4>
                <FontAwesomeIcon className="down-2" icon={faChevronDown} />
                <FontAwesomeIcon className="firts-rotate-icon" icon={faChevronDown} />
                <h5 className="range">14-20</h5>
                <FontAwesomeIcon className="second-rotate-icon" icon={faChevronDown} />
                <Table day="Mon" date="Sep14" text="logged in:10:00 AM | logged off:10:00 PM| 12hr working, 4hr overwork" more="more informatio..." morecolor="#40D2AC" hcolor="grey" paracolor="grey"/>
                <Table day="Tue" date="Sep15" text="LOP" action="take action" color="#FEA101" hcolor="#FEA101" paracolor="#FEA101" actioncolor="#FEA101" background="#FFF6E6"/>
                <Table day="Wed" date="Sep17" text="Leave applied: casual" more="approved" morecolor="#40D2AC" morebackground="#D2FEF2" paracolor="grey" hcolor="grey"/>
                <Table day="Thu" date="Sep18" text="National holiday" color="#F26B6B" hcolor="#F26B6B" paracolor="#F26B6B" background="#FFF1F1"/>
                <Table day="Fri" date="Sep19" text="Optional holiday" color="#F26B6B" hcolor="#F26B6B" paracolor="#F26B6B" background="#FFF1F1"/>
                <Table day="Sat" date="Sep20" hcolor="grey"/>
                <Table day="Sun" date="Sep21" hcolor="grey"/>
            </div>
            <div className="second-half">
                <h5>Total week data</h5> 
                <table>
                    <tr>
                        <td><p >Working hours</p><h4>20hr 30m</h4></td>
                        <td><p>Worked</p><h4>10hr 20m</h4></td>
                    </tr>
                    <tr>
                        <td><p >Overtime</p><h4>20hr 30m</h4></td>
                        <td><p>Undertime</p><h4>1h 20m</h4></td>
                    </tr>
                </table>
                <hr class="first-hr"/>
                <hr className="second-hr"/>
                <h5>Extra information</h5>
                <section>
                    <h6>Upcoming holidays</h6>
                    <p>17th Sept | Ram jayanti</p>
                </section>
            </div>
        </div>
    );
}

export default Final;
