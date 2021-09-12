import React from "react";

function Table(props){
    const colo=props.color;
    const bac=props.background;
    const hcol=props.hcolor;
    const mcol =props.morecolor;
    const mback =props.morebackground;
    const pcol =props.paracolor;
    const acol = props.actioncolor;
    return(
        <div className="table-div">
            <table style={{background:bac}}>
                <tr >
                    <td> <span style={{color:colo}}>{props.day}</span> <h6 style={{color:hcol}}>{props.date}</h6></td>
                    <td> <span class="text-para" style={{color:pcol}}>{props.text}</span> <h6 class="moree" style={{color:mcol, background:mback}}>{props.more}</h6></td>
                    <td> <span className="action" style={{color:acol}}>{props.action}</span></td>
                </tr>
            </table>
            <hr />
        </div>
    );
}

export default Table;