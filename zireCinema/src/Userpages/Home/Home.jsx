import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// import { Link } from "react-router-dom";
import Navbar from "../../components/Navigationbar";
import Footer from "../../components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cinemaAbout1 from "../../images/aboutUs1.jpg";
import cinemaAbout2 from "../../images/aboutUs2.jpg";
import cinemaAbout3 from "../../images/aboutUs3.jpg";
import cinemaAbout4 from "../../images/aboutUs4.jpg";

const Home = () => {
  //!State
  const [movies, setMovies] = useState([]);

  //! Carousel
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };
  console.log(movies);
  return (
    <div>
      <section>
        <header className="homeHeaderContainer">
          <div className="container">
            <Navbar />

            <Swiper
              spaceBetween={1000}
              centeredSlides={true}
              // autoplay={{
              //   delay: 4500,
              //   disableOnInteraction: false,
              // }}
              speed={2000}
              pagination={{
                clickable: true,
                type: "fraction",
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className="mySwiper"
            >
              {movies.map((movie) => {
                return (
                  <SwiperSlide>
                    <div className="carouselComponent">
                      <div className="carouselComponentLeftSide">
                        <iframe
                          src={movie.Trailer}
                          frameborder="0"
                          allow="accelerometer; autoplay;"
                          allowfullscreen="false"
                          title="Embedded youtube"
                        ></iframe>
                      </div>
                      <div className="carouselComponentRightSide">
                        <div>
                          <a href="/movies/55">
                            <h4>{movie.Title}</h4>
                          </a>
                          <p>{movie.Plot}</p>
                        </div>
                        <div class="carouselComponentMovieDetails">
                          <div>
                            <span>Yaş həddi</span>
                            <p>{movie.Year}</p>
                          </div>
                          <div>
                            <span>Ölkə</span>
                            <p>{movie.Country}</p>
                          </div>
                          <div>
                            <span>Dil</span>
                            <p>{movie.Language}</p>
                          </div>
                          <div>
                            <span>İl</span>
                            <p>{movie.Year}</p>
                          </div>
                          <div>
                            <span>Janr</span>
                            <p>{movie.Genre}</p>
                          </div>
                          <div>
                            <span>Cədvəl</span>
                            <p>{movie.Released}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </header>
      </section>

      <section className="mb-5 mt-5 pb-5" id="films">
        <div className="container">
          <div className="mb-4" id="myBtnContainer">
            <button className="btn active" onclick="filterSelection('now')">
              BU GÜN
            </button>
            <button className="btn" onclick="filterSelection('soon')">
              TEZLİKLƏ
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="filterDiv now col-lg-3 col-sm-6 col-xs-12 film-item">
              <div className="overlay">
                <ul>
                  <li>
                    <label className="data">Yaş</label>
                    <span className="desc">12+</span>
                  </li>
                  <li>
                    <label className="data">Dil</label>
                    <span className="desc">Rus</span>
                    <span className="desc">Türk</span>
                  </li>
                  <li>
                    <label className="data">Janr</label>
                    <span className="desc">Romantika</span>
                  </li>
                  <li>
                    <label className="data">İl</label>
                    <span className="desc">2023</span>
                  </li>
                  <li>
                    <label className="data">Ölkə</label>
                    <span className="desc">ABŞ</span>
                  </li>
                  <li>
                    <label className="data">Cədvəl</label>
                    <span className="desc">16.03.23 - 05.04.23</span>
                  </li>
                </ul>
              </div>

              <div className="cover-box">
                {/* <div className="cover" style="background-image: url(uploads/images/original/KGDHt45xrWmSzUpsNgaYdVz2QKlEsPsN.jpg);"></div> */}
              </div>

              <h5>
                <a href="movies/58.html">Nəhs ölülərin üsyanı</a>
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5 pt-5 pb-4" id="seans">
        <div className="container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="thfirst" scope="col">
                    FİLM
                  </th>
                  <th scope="col">SEANS</th>
                  <th scope="col">FORMAT</th>
                  <th className="thlast" scope="col">
                    BİLET
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a>Şazam! 2</a>
                  </td>

                  <td>10:00:00</td>

                  <td className="formats">
                    <span>
                      <a data="Film%202D%20formatda%20n%c3%bcmayi%c5%9f%20olunur.html">
                        <img src="img/format-icons/2d.png" />
                      </a>
                    </span>
                    <span>
                      <a data="Film%20T%c3%bcrk%20dilind%c9%99%20n%c3%bcmayi%c5%9f%20olunur.html">
                        <img src="img/format-icons/tr.png" />
                      </a>
                    </span>
                  </td>

                  <td className="tdlast">3 AZN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="aboutUsContainer">
        <div className="container">
          <div className="homeLastSection">
            <div className="homeLastSectionLeft">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                speed={1500}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}
                className="homeLastCarousel"
              >
                <SwiperSlide>
                  <img src={cinemaAbout1} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cinemaAbout2} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cinemaAbout3} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cinemaAbout4} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="homeLastSectionRight">
              <h4>ZIRE CINEMA</h4>

              <p>
                Burada, 300 nəfərlik konsert, tədbir və film nümayişi üçün 3D
                kinozal fəaliyyət göstərir. Kinozal, müasir tələblərə cavab
                verən ən sox texnologiyalar ilə təchiz olunub. Zalda, ən son
                filmlərin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait
                yaradılıb.
              </p>

              <a href="/aboutus" className="homeLastSectionBtn">
                DAHA ÇOX
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="pb-5 pt-3 mt-5 mb-5">
	<div className="container banner-bottom">
		<img className="gencol" src="img/gencol.jpg">
		<img className="gencolmini" src="img/gencolmini.jpg">
	</div>
</section> */}
      <Footer />
    </div>
  );
};

export default Home;
