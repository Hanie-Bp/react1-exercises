const Card = () => {
  return (
    <div className="card m-5">
      <img
        className="card-img-top "
        src="https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2021/07/30/030310_1350926.png.1500x1005_q95_crop-smart_upscale.png"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Bob Dylan</h5>
        <p className="card-text">
          Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
          singer/songwriter, author, and artist who has been an influential
          figure in popular music and culture for more than five decades.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Bob_Dylan"
          className="btn btn-primary"
        >
          Go to wikipedia
        </a>
      </div>
    </div>
  );
};

export default Card;
