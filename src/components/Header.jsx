import './SeriesList.css'
export default function Header() {
  return (
    <>
      <div>
        <a href="/" target='_self'>
      <h2 className="nameOfApp">Movie-Pulse</h2></a>
        
        <a href="https://www.netflix.com/title/80189685" target="_self">
        
          <img
            src="http://localhost:5173/images/tw.webp"
            alt="_blank"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </a>
      </div>
    </>
  );
}
