// import React from 'react'

// function Testimonial() {
//   return (
//     <div id ="testimonial">
//         <h2>Testimonial</h2>

//         <section>
//         <TestimonialCard name = {"Rohit"} feedback= {"You are a good web developer"}/>


//         </section>
//     </div>
//   )
// };

// const TestimonialCard = ({name , feedback}) => {
    
//     return (
//         <article>

//         <img src = "https://cdn-icons-png.flaticon.com/512/149/149071.png" alt = "User"/>
//         <h4> {name}</h4>
//         <p>{feedback}</p>

//     </article>

//     )
    
// }

// export default Testimonial
import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Name 1"}
          feedback={"You are a good Software Developer."}
        />

        <TestimonialCard
          name={"Name 2"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"Name 3"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;