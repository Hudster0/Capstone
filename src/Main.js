function Main() {
  return (
    <>
      <hero class="hero">
        <heroInfo class="heroInfo">
          <h1>Little Lemon</h1>
          <h3>New York</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </heroInfo>
      </hero>

      <highlight class="highlight">
        <div class="together">
          <h1>Special</h1>
          <div class="container">
            <div class="card">
              <img
                src="https://cdn.vox-cdn.com/thumbor/XpKT97nXTMPHdiHHjsYJYDtktnw=/0x0:7072x4717/1200x900/filters:focal(2971x1794:4101x2924)/cdn.vox-cdn.com/uploads/chorus_image/image/57032607/Farmer_s_Market_Platter_2.434.jpg"
                alt="Image 1"
              />
              <h3 class="title">Untitled</h3>
              <a class="button" href="#">
                Read More
              </a>
              <p class="text">Lorem ipsum dolor sit amet...</p>
              <a class="link" href="#">
                See All options
              </a>
            </div>
            <div class="card">
              <img
                class="middle-img"
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7oORFK7YEEM/v1/-1x-1.jpg"
                alt="Image 2"
              />
              <h3 class="title">Untitled</h3>
              <a class="button" href="#">
                Read More
              </a>
              <p class="text">Lorem ipsum dolor sit amet...</p>
              <a class="link" href="#">
                See All options
              </a>
            </div>
            <div class="card">
              <img
                src="https://media.timeout.com/images/105775049/750/562/image.jpg"
                alt="Image 3"
              />
              <h3 class="title">Untitled</h3>
              <a class="button" href="#">
                Read More
              </a>
              <p class="text">Lorem ipsum dolor sit amet...</p>
              <a class="link" href="#">
                See All options
              </a>
            </div>
          </div>
        </div>
      </highlight>

      <testimonials class="testimonial">
        <h1>Testimonials Section</h1>
      </testimonials>

      <about class="about">
        <h1>About Sections</h1>
      </about>
    </>
  );
}

export default Main;
