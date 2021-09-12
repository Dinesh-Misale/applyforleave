import React from "react";

function Leave(){
    return(
        <div className="leave-div">
            <h3>Leave</h3>
            <a href="https://xd.adobe.com/view/0d9851e2-19f9-4df3-a0ab-d851d5a7d41f-58cb/screen/19cd7673-0fca-4547-8c28-8399c291de3f">Apply</a>
            <table>
                <tr>
                    <td><p>Earned</p><h5>10</h5></td>
                    <td><p>Sick</p><h5>13</h5></td>
                    <td><p>Optional</p><h5>13</h5></td>
                </tr>
                <tr>
                    <td><p>Casual</p><h5>25</h5></td>
                    <td><p>Wellness</p><h5>10</h5></td>
                    <td><p>Camp off</p><h5>10</h5></td>
                </tr>
            </table>
            <button>View leave history</button>
        </div>
    );
}

export default Leave;