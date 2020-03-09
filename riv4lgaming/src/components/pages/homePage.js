import React,  {Component} from 'react';

class Homepage extends Component {
  render() {
     return (
<main>
  <article>
   <aside>
      <h1>
        Aside 1
      </h1>
   </aside>
   <section>
    <h1>
      Section header
    </h1>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
   </section>
    <aside>
      <h1>
        Aside 2
      </h1>
    </aside>
  </article>
</main>
     );
  }
}

export default Homepage;