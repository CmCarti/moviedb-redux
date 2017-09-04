import React from 'react';
import _ from 'lodash';

export default ({crew}) => {

    // 1. lodash filter the crew that I'm interested in
    const featured_crew = _.filter(crew, (member) => member.job === 'Story' || member.job === 'Writer' || member.job === 'Director' || member.job === 'Characters' || member.job === 'Novel')

    // 2. Check for duplicate entries and merge jobs
    const filtered_crew = featured_crew.filter((person) => {
        featured_crew.forEach((otherPerson, index) => {
            if(person.name === otherPerson.name){
                if(person.job !== otherPerson.job){
                    person.job = `${person.job}/${otherPerson.job}`;
                    featured_crew.splice(index, 1);
                }
            }
        }); 
            return person;
        
    }) // 3. Sort by order of importance
    .sort((a, b) => {
        if(a.job.includes('Director')){
            return -1;
        }
        if(b.job.includes('Director')){
            return 1;
        } if(a.job.includes('Characters') || a.job.includes('Novel')){
            return 1;
        }
         if(b.job.includes('Characters') || b.job.includes('Novel')){
             return -1;
         }    return 0;
    });
    // 4. create the function to render the crew 
    const render_crew = filtered_crew.map((member) => {
        
        return (
            
            <div className="col m6 s12" key={member.name}>
                <h5 className="featured-crew">{member.name}</h5>
                <p>{member.job}</p>
            </div>
        )
    })
    
 
    return (
        <div className="row">
            <h5>Featured Crew:</h5>
            {render_crew}
        </div>
    )
}