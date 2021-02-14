import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="about-me-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ea?
        Possimus quo dolore perspiciatis, modi laboriosam inventore. Nostrum
        necessitatibus quas corrupti delectus! Voluptate aliquam ipsum
        aspernatur consequuntur voluptas molestias dolor. Sed laborum officiis
        odio quo, architecto est quas quaerat tempora velit illum adipisci,
        explicabo deleniti magnam ab impedit hic earum. Delectus fugiat rerum
        mollitia esse impedit quae et, nobis non? Suscipit consectetur facere
        reprehenderit, nostrum maxime aliquam ut, dolore quod, quos dolores
        dignissimos animi rem! Labore natus cum a. Odio magni eos dignissimos
        architecto providenit quod quae pariatur reiciendis iste alias
        temporibus placeat deserunt recusandae architecto minima? Molestiae,
        eius. Dolores laboriosam placeat assumenda veniam quis perspiciatis
        eligendi quo quaerat repudiandae laborum excepturi nihil iste, quas
        maiores, beatae, nisi fuga obcaecati officia! Quos eveniet nemo fuga
        optio saepe, natus voluptatibus! Voluptatibus, molestiae. A, repudiandae
        culpa? Quisquam, adipisci voluptatum? Voluptate optio voluptas quis
        doloribus aut accusantium. Magni aut ducimus delectus dolore magnam
        accusamus adipisci? Atque harum non dolorem, beatae itaque odit?
      </div>
    </div>
  );
}
