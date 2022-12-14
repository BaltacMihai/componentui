---
title: Color
guide: color
excerpt: Color is one of the most crucial tools a designer has since it can make or break a website.
icon: color.svg
---

<script >
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
function show(theId){
  const element = document.querySelector('#nav_'+theId);
  const section = document.querySelector('#'+theId);
 
  if(section && element)

isInViewport(section) ?
       element.classList.add("active") :
       element.classList.remove("active");
}

const ids = ["why","what_are_colors","three_colors","The_60_30_10_rule","iterate_your_colors","contrast","use_colors_consistently"]

document.addEventListener('scroll', function () {
ids.forEach(one => show(one))

        
  

}, {
    passive: true
});
  </script>

<div class="aside">
  <h2> Lesson Contents: </h2>
  <a href="#why" id="nav_why"> Why? </a>
  <a href="#what_are_colors" id="nav_what_are_colors"> What are colors? </a>
  <a href="#three_colors" id="nav_three_colors"> Limit your palette to three colors </a>
   <a href="#The_60_30_10_rule" id="nav_The_60_30_10_rule"> The 60 - 30 -10 rule </a>
  <a href="#iterate_your_colors" id="nav_iterate_your_colors"> Apply then iterate your colors</a>
  <a href="#contrast" id="nav_contrast"> Contrast</a>
  <a href="#use_colors_consistently" id="nav_use_colors_consistently"> Use colors consistently in your interface</a>

</div>
<section id="why">
  <h2>Why?</h2>
  <p> The user will quit your site instantly if it has a terrible color palette but good content. However, if the color palette is nicely picked, the user may give the site a chance.</p>
  <p> Before we go into whether color palettes are excellent or bad, let's define color.</p>
</section>

<section id="what_are_colors">

  <h2 > What are colors?</h2>
  <br>
  <p>
    Color is one of the most powerful tools we have as designers, whether we are UI desingers or not. And it has the ability to perform a variety of things for us. It may establish the tone for a brand and attract people' attention. However, finding the appropriate color combination and then applying those colors to your design might be difficult.
  </p>
  <p>
  </p>
  <p>
  So, how can you include color into your design?
  </p>
  <p>
   The selection of a color palette and its application to a design are not coincidental. Iteration and careful application are required to fully benefit from and take use of a color in a UI. Color may improve brand impression, capture attention and stimulate interactions, influence user emotions, and increase usability.
  </p>
<br>

  <h3> How? </h3>
</section>

<section id="three_colors">
  <h2 > Limit your palette to three colors</h2>
  <p>
   Because there are fewer colors to ponder and be distracted by, fewer colors enhance visual hierarchy and contrast.
  </p>

  <p>
   Have you ever struggled to locate a particular cereal in the cereal aisle, for instance? That is as a result of the abundance of colors! Every color is fighting for your attention.
  </p>
     <img src="/componentui/color/market.jpg"  style="width: 500px;"/>
  <p>
    The same is true for your designs.</p>
  <p>
    <b>Less is more.</b>
  
  </p>
<br>

  <h3> But how? </h3>
</section>

<section id="The_60_30_10_rule">
  <h2> The 60 - 30 -10 rule</h2>
  <p>
  The 60/30/10 guideline, often known as <b>The Golden Rule</b>, states that color should be utilised 60%, 30%, and 10% of the time. In other words, use 60% for the dominant color, 30% for the secondary color, and 10% for the accent color.
  </p>
  <p>
   This is more like a style of thinking because it's impossible to quantify the amount of color you utilize.
  </p>
 <br>
  <img src="/componentui/color/img-60-30-10.svg"  style="width: 750px;"/>

  <br>

  <br>
  <p>
 The  <b>60%</b> is usually the netral or primary color. This portion will be used as the base color of the design;
  </p>
  <p>
  The  <b>30%</b> is the secondary color. It is still visible and will be used for some medium components such as card, carousel, etc.;
  </p>
  <p>
  The  <b>10%</b> is the accent color. This portion will be used for highlight of the design. For example, CTA buton, pop up, and some important points of your interface.;
  </p>
<br>
  <h3> Now that we have the colors, how do we use them? </h3>

</section>
<section id="iterate_your_colors">
  <h2 > Apply then iterate your colors</h2>
  <p>
  After applying the 60-30-10 guideline, you'll need to step back and assess what's working and what isn't before making adjustments to your color scheme. Do your color choices help establish the proper visual hierarchy, for example?

  </p>
  <p>
   In other words, is your attention pulled to the design components you wish to emphasize? Do the colors you've chosen help your design have harmony and contrast?
  </p>
    <img src="/componentui/color/iterateColors.svg"  style="width: 1000px;"/>
  <p>
    Look for <b>contrast</b>!
  </p>
</section>
<section id="contrast">
<h2> Contrast </h2>

<p>Contrast aids in the organization of your design and the establishment of a hierarchy, which simply displays which components of your design are more significant (and signals viewers to focus on those). However, excellent contrast provides visual appeal to your design in addition to underlining the focus point.
</p>
<p>
A poor contrast might make it difficult to interpret the design.</p>

 <img src="/componentui/color/contrast.svg"  style="width: 1000px;"/>
</section>
<section  id="use_colors_consistently">
  <h2 > Use colors consistently in your interface</h2>
  <p>
    If your calls to action on one screen are purple, you should use the same color for calls to action everywhere, unless you have an absurdly excellent reason to stray from it.
 <img src="/componentui/color/colors_consistently.svg"  style="width: 1000px; border: 1px solid #ccc;"/>
 <img src="/componentui/color/colors_consistently_2.svg"  style="width: 1000px;  border: 1px solid #ccc;"/>
  </p>
</section>

<style>
  section{
      margin-bottom: 5rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.7777778;
    margin: 0.5rem 0;
  }

img{
  max-width: 90%;
}
  .aside {
    position: fixed;
    right: 5%;
    display: flex;
    flex-direction: column;
    top: 15%;
  }


  .aside h2 {
    margin-bottom: 2rem
  }

  .aside a {
    padding-left: 1rem;
    border-left: 3px solid #ccc;
    padding: 0.5rem 1rem;
     color: #999;
  }

  .aside a:hover, .aside a.active{
    border-color: #5d60ef;
    color: #5d60ef;
    background-color: #ded7fb47;
    padding: 0.5rem 1rem;
    font-weight: bold
  }


   @media (max-width: 1262px) {
  .aside {
    display: none;
    }
  }
</style>
