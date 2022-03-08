import React from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

// import home style
import './Home.css';

// import section styling
import './Sections.css';
import Section4 from './sections/Section4';


const Home = () => {
    return ( 
        <div>
            <section>
                <Section1 />
            </section>
            <section>
                <Section2 />
            </section>
            <section>
                <Section3 />
            </section>
            <section>
                <Section4 />
            </section>
        </div>
     );
}
 
export default Home;