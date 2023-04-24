import {movesData} from "../datas/moves"
import {useNavigate} from 'react-router-dom'

export const Moves = () => {
    const navigate = useNavigate()
    const moves = movesData
    type Move = {
        name?:string;
        url?:string;
    }

    return (
        <>
        {moves.map(((move:Move) =>
            <div className="card w-80 bg-base-100 shadow-xl image-full my-5">
                <div className="card-body">
                    <h2 className="card-title">{move.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"
                        onClick={() => navigate("/")}>Check it</button>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}