
function Cards({ img, header, day, heading, des1, des2, rate, place, save, status }) {
  return (
    <>
      <div className="card">
        <div className="topBar">
          <img src={`/src/assets/${img}.png`} alt="logo" className="amazonLogo" />
          <button className="saveButton">
            {status}
            <img
              src={`/src/assets/${save}.png`}
              alt="bookmark"
              className="bookmarkIcon"
            />
        </button>
        </div>
        <div className="header">
          <h4>{header}</h4>
          <h6>{day} days ago</h6>
        </div>
        <div className="heading">
          <h3>{heading}</h3>
        </div>
        <div className="sub-heading">
          <button className="tag">{des1}</button>
          <button className="tag">{des2}</button>
        </div>
        <div className="line"></div>
        <div className="footer">
          <div className="footerText">
            <h4>{rate}</h4>
            <h6>{place}</h6>
          </div>
          <button id="footerButton">Apply now</button>
        </div>
      </div>
    </>
  )
}

export default Cards