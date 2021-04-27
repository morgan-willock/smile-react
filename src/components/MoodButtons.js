import "../styles/MoodButtons.scss";

export default function MoodButtons(props) {
  const handleClick = props.click;

  return (
    <div className="custom-radios">
      <div>
        <input type="radio" id="color-1" name="color" value="color-1" />
        <label htmlFor="color-1">
          <span onClick={handleClick} id="1">
            <img
              src="https://openmoji.org/data/black/svg/1F613.svg"
              alt=""
              id="1"
            />
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" id="1" /> */}
          </span>
        </label>
      </div>
      <div>
        <input type="radio" id="color-2" name="color" value="color-2" />
        <label htmlFor="color-2">
          <span onClick={handleClick} id="2">
            <img
              src="https://openmoji.org/data/black/svg/1F641.svg"
              alt=""
              id="2"
            />
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" id="2" /> */}
          </span>
        </label>
      </div>
      <div>
        <input type="radio" id="color-3" name="color" value="color-3" />
        <label htmlFor="color-3">
          <span onClick={handleClick} id="3">
            <img
              src="https://openmoji.org/data/black/svg/1F610.svg"
              alt=""
              id="3"
            />
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" id="3" /> */}
          </span>
        </label>
      </div>
      <div>
        <input type="radio" id="color-4" name="color" value="color-4" />
        <label htmlFor="color-4">
          <span onClick={handleClick} id="4">
            <img
              src="https://openmoji.org/data/black/svg/1F642.svg"
              alt=""
              id="4"
            />
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" id="4" /> */}
          </span>
        </label>
      </div>
      <div>
        <input type="radio" id="color-5" name="color" value="color-5" />
        <label htmlFor="color-5">
          <span onClick={handleClick} id="5">
            <img
              src="https://openmoji.org/data/black/svg/1F60A.svg"
              alt=""
              id="5"
            />
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" id="5" /> */}
          </span>
        </label>
      </div>
    </div>
  );
}
