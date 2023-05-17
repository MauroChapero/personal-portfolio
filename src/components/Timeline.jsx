import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline({ title, data, ...props }) {
    return (
        <div className="flex flex-col md:flex-row justify-center my-3">
            <div className="w-full md:w-7/12">
                <Title>{title}</Title>
                {data.map((item) => (
                    <TimelineItem
                        key={item.id}
                        year={item.year}
                        title={item.title}
                        company={item.company}
                        courseType={item.courseType}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )   
}

export default Timeline;