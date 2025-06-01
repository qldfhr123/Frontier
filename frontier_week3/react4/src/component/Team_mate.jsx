import React from "react";


const Team_mate = (propos) =>{
    // propos 상위컴포넌트에 보낸 데이터가 담겨있다
    return (
        <div>
            <p>{propos.dep}</p>
            <p>{propos.name}</p>
        </div>

    );

};

export default Team_mate;