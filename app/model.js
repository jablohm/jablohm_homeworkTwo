// Ths is my model and it handles all services calls; gets data

var homeContent = `    <section class="home">
<div class="row">
    <div class="column">
        <img src="img/hero.jpg" alt="">
    </div>
    <div class="column">
        <h1 class="center">WELCOME HOME</h1>
    </div>
</div>
</section>`;

var aboutContent = `<section class="about">
<div class="row">
  <div class="column">
    <img src="img/about.jpg" alt="" />
    <div class="desc">
      <p>
        <h3>THE BAND</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae
        vel expedita itaque atque iure excepturi aliquid maiores nihil sequi
        error, exercitationem fuga maxime repellat repellendus accusamus
        fugiat deserunt rerum? 
        <br>
        <br>
        Maxime iure nihil dolore, minima officia ipsa
        minus sed quasi non laborum quo iste corrupti, exercitationem soluta
        similique totam aut ab sunt. Aliquid, nobis nihil. Quia dolorum sunt
        voluptatem aliquam. Doloremque iusto quia quasi, doloribus officia
        velit sequi voluptatem sed ullam ab. 
        <br>
        <br>
        Tempora dicta beatae id,
        sapiente provident vitae laboriosam molestiae iure sed aut
        necessitatibus dolore minus placeat. Blanditiis, aliquam.
        <br>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga nobis maxime alias cupiditate, sint nihil dignissimos nemo perferendis voluptatem ipsum. Facere atque adipisci quaerat optio fuga harum, aliquid repellat?
      </p>
    </div>
  </div>

</div>

</section>`;

var productsContent = `   <div class="products">
<section class="product1">
  <div class="row">
    <div class="column">
      <img src="img/products.jpg" alt="" />
      <div class="desc">
        <p>
          <h2>DEBUT EP</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae
          vel expedita itaque atque iure excepturi aliquid maiores nihil sequi
          error, exercitationem fuga maxime repellat repellendus accusamus
          fugiat deserunt rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quod id ducimus ea tempore reprehenderit blanditiis numquam architecto. Quis optio labore vel architecto deserunt repellat laborum sapiente fugit corrupti eos. 
          <br>
          <br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reiciendis. Ducimus temporibus est quod quos maxime cumque voluptates tempora maiores voluptas? Odit eveniet architecto molestiae inventore illo quia placeat cumque.
          Distinctio mollitia modi itaque placeat minima similique, nulla praesentium officia porro maxime, eveniet sint beatae! Laborum maiores nisi veniam.
        </p>
      </div>
    </div>
  
  </div>
  
</section>

<section class="product2">
  <div class="row">
    <div class="column">
      <img src="img/products2.jpg" alt="" />
      <div class="desc">
        <p>
          <h2>DEBUT LP</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae
          vel expedita itaque atque iure excepturi aliquid maiores nihil sequi
          error, exercitationem fuga maxime repellat repellendus accusamus
          fugiat deserunt rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut officia laboriosam delectus? Enim omnis itaque vel, inventore magnam sit repudiandae aspernatur ullam maxime perspiciatis commodi similique neque facere placeat corporis?
          <br>
          <br>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro doloremque vitae voluptatum voluptatem odit ullam sapiente laudantium quas ab error, eius consequatur voluptate minima sit corrupti veritatis excepturi. Exercitationem, perspiciatis!
          Officia doloremque perspiciatis commodi quidem. Vitae labore id voluptatibus temporibus ut ipsa sunt dolor distinctio fuga et a voluptatem quas sit cumque deleniti inventore ex modi, explicabo illo repellendus dolores.
          Sapiente quisquam magni nobis. 
        </p>
      </div>
    </div>
  
  </div>
  
</section>
</div>`;

var contactContent = `<div class="contact">
<section class="hero">
  <img src="img/contact.jpg" alt="">
</section>
<section class="contactinfo">
  <h2>CONTACT US</h2>
    <div class="name">
      <p>NAME</p>
    </div>
    <div class="email">
      <p>EMAIL</p>
    </div>
    <div class="button">
      <p>SUBMIT</p>
    </div>
</section>
</div>`;

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
  $("#app").html(eval(contentName));
}

export { setCurrentPageContent };
