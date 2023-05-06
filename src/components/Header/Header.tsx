import "./Header.css"

export const Header = () => {
  return (
    <>
      <div className="arrowContainer flex justify-between">
        <div
          title="Return to the Pokédex"
          className="backArrow ml-4 flex justify-center"
            onClick={() => window.history.back()}
        >
          &#10140;
        </div>
        <img src="/pokeball.svg" className="pokeballImg justify-center mr-4" />
      </div>
    </>
  )
}
