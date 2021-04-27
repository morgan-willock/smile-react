import "../styles/MoodEmoji.css";

export default function MoodEmoji(props) {
  return (
    <div className="mood-emoji-container">
      <span className="single-emoji-container one">
        <img src="https://openmoji.org/data/black/svg/1F613.svg" alt="" />
      </span>
      <span className="single-emoji-container two">
        <img src="https://openmoji.org/data/black/svg/1F641.svg" alt="" />
      </span>
      <span className="single-emoji-container three">
        <img src="https://openmoji.org/data/black/svg/1F610.svg" alt="" />
      </span>
      <span className="single-emoji-container four">
        <img src="https://openmoji.org/data/black/svg/1F642.svg" alt="" />
      </span>
      <span className="single-emoji-container five">
        <img src="https://openmoji.org/data/black/svg/1F60A.svg" alt="" />
      </span>
    </div>
  );
}
