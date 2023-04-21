import { homeDatas } from "../../datas/datas"
import { useNavigate } from "react-router-dom"
import "./Buttons.css"

export const Buttons = () => {
  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const url = e.currentTarget.innerText.toLowerCase()
    navigate(`/${url}`)
  }

  return (
    <>
      {homeDatas.map((data: string) => (
        <button onClick={handleClick}
        className="btn mx-8 my-2"
        key={data}>
          {data}
        </button>
      ))}
    </>
  )
}
