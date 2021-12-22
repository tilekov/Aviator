import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="home-start">
        <h2 className="home-text">ЛЕТАЕМ ПЕРВЫМ КЛАССОМ</h2>
        <img width="180px" src="https://aviatorwatch.swiss/assets/template/logo_category/White/Douglas_Day-Date.svg" alt="" />
        {/* <Carousel autoplay>
          <div>
            <img
              width="100%"
              src="https://aviatorwatch.swiss/assets/banners/home/daydate41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.279.4_1600px.webp"
              alt=""
            />{" "}
          </div>
          <div>
            <img
              width="100%"
              src="	https://aviatorwatch.swiss/assets/banners/home/mig29/AVIATOR-WATCH--MIG-29-SMT_1600px.webp"
              alt=""
            />{" "}
          </div>
          <div className="girl-img">
            <img
              width="100%"
              src="https://aviatorwatch.swiss/assets/banners/home/moonflight/AVIATOR-WATCH--DOUGLAS-MOONFLIGHT_SKYMOON_ST_1600px.webp"
              alt=""
            />{" "}
          </div>
          <div>
            <img
              width="100%"
              src="	https://aviatorwatch.swiss/assets/banners/home/airacobra/AVIATOR-WATCH--AIRACOBRA_1600px.webp "
              alt=""
            />{" "}
          </div>
        </Carousel> */}
      </div>
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0",
          }}
        >
          МИР ЧАСОВ AVIATOR
        </h2>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0% 5%",
            }}
          >
            <h2>МЕХАНИЧЕСКИЕ ЧАСЫ</h2>
            <p>
              Механические часы с автоподзаводом по праву считаются краеугольным
              камнем швейцарского часового дела. Владельцы часов AVIATOR могут
              быть уверены, что обладают часами с автоподзаводом высочайшего
              качества, олицетворяющими великолепные достижения инженерной
              мысли. Движение стрелок обеспечивается пружиной, запускающей
              колесики и зубчики. Даже в самые напряженные моменты вы слышите
              размеренное тиканье часов. Гармоничные вращения ротора делают ваши
              движения частью часового механизма.
            </p>
          </div>
          <img
            style={{ width: "50%" }}
            src="https://aviatorwatch.swiss/assets/images/Automatic-watch_1280px.webp"
            alt=""
          />
        </div>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "50%" }}
            src="	https://aviatorwatch.swiss/assets/images/Chronograph-watch_1280px.webp"
            alt=""
          />
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0% 5%",
            }}
          >
            <h2>ХРОНОГРАФ</h2>
            <p>
              Что бы вы ни делали, где бы ни находились, важно всегда сохранять
              ситуацию под контролем. Источником вдохновения при разработке всех
              хронографов AVIATOR стали традиции мира авиации, из которого в
              часы был привнесен целый ряд усовершенствований, позволяющих
              отмерять время с точностью до наносекунды. Владельцы часов AVIATOR
              могут не только определить время, но и рассчитать расстояние и
              замерить скорость, например с помощью секундомера, на который
              нанесены тахиметрическая и телеметрическая шкалы. При производстве
              подобных часов используется исключительно сапфирное стекло,
              ремешки из натуральной кожи, водонепроницаемые корпуса из
              нержавеющей стали. Часы производятся в двух вариантах ̶ с кварцевым
              механизмом и автоподзаводом. Что бы вы ни выбрали, вы убедитесь,
              что самый высокий уровень мастерства проявляется в деталях.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "2px",
          width: "100%",
          height: "42vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage:
            "url('https://aviatorwatch.swiss/assets/banners/home/PILOT_WATCHES_1440px.webp')",
        }}
      >
        <h2 style={{marginTop:"5%", marginBottom:"1%"}}>ДРУГИХ ТАКИХ НЕТ</h2>
        <p style={{width:"45%"}}>С момента своего основания в 2000 году бренд AVIATOR следует своей миссии разработке лучшей коллекции авиационных часов, черпая вдохновение в истории авиации и ее развитии. Создание каждой модели требует исключительного мастерства и использования материалов наивысшего качества. Штаб-квартира компании и производство расположены в городе Поррантрюи, в сердце швейцарской часовой отрасли. Сочетая лучшие традиции часового дела с духом авиации, AVIATOR стремится создать лучшие современные часы для пилотов и всех ценителей наручных часов. Лаборатория AVIATOR расположена в диспетчерской вышке аэродрома кантона Юра, что служит постоянным источником вдохновения и позволяет бренду взаимодействовать с пилотами и другими специалистами авиационной отрасли.</p>
      </div>
    </>
  );
};

export default Home;