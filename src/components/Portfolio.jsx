import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default function Portfolio( {projectList} ) {
    let filters = ["All", "Websites", "Flayers", "Business Cards"];
    let [filteredList, setFilteredList] = useState(projectList); 
    let [selectedFilter, setSelectedFilter] = useState("All");

    function filter(event) {
        let buttons = Array.from(document.querySelectorAll("button"));
        let activeButton = buttons.findIndex(item => item.classList.contains("active"));

        buttons[activeButton].classList.remove("active");
        event.target.classList.add("active");

        let select = event.target.textContent;

        if (select === "All") {
            setFilteredList(projectList);
        } else {
            setFilteredList(projectList.filter((item) => item.category === select));
        }

        setSelectedFilter(select);
    };



    return (
        <div>
            <Toolbar
                filters = {filters}
                selected = {selectedFilter}
                onSelectFilter = {filter}
            />

            <ProjectList
                projects = {filteredList}
            />
        </div>
    );
}