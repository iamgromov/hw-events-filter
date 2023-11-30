import React from "react";

export default function ProjectList ( { projects } ) { 
    let index = 0;

    return (
        <div className="projectList">
            {projects.map((item) =>
                <div className="image" key = { index = index + 1 }>   
                    <img src = { item.img } />
                </div>
            )}
        </div>
    )
}