const Header = () => {
  return (
    <header>
        <div>Logo</div>
        <nav>
          <ul>
            <li>Home</li> 
            <li>About</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>
  )
}


const Section = () => {
  return (      <section>
  <h2>Welcome to React</h2>
  <button>click</button>
  <button>Hello</button>
  <button>submit</button>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores ut quos, reiciendis non quaerat pariatur harum! Accusamus excepturi, est quo enim possimus harum, a ratione, odit eaque repellendus soluta.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi possimus quidem asperiores quaerat qui, distinctio facere sequi libero nesciunt itaque, aut voluptas culpa nostrum eius corporis sunt velit dicta?
  Provident nobis, consectetur odio sequi, porro sint ea voluptatem pariatur dicta atque eligendi, reiciendis totam voluptate fugit cumque aut beatae id dignissimos! Illum nisi ratione deserunt laboriosam, ipsa fuga et.</p>
</section>
);
};

const Footer = () => {
  return (
    <footer>
    <span> &copy; All rigths reserved!</span>
  </footer>
  )
}


const App = () => {
  return (
    <div>
< Header/>
<Section/>
<Footer/>     
    </div>
  );
};

export default App;