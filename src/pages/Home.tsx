import { Buttons } from '../components/Buttons/Buttons'

export const Home = () => {
    return (
        <>
            <h1 className="text-4xl font-bold m-4"> What Pokemon are you looking for ? </h1>

            <input type="text" placeholder="Search Pokemon, move, ability, etc." className="input input-bordered w-full max-w-xs mx-6 mb-10" />

            <Buttons/>

            {/* Section News */}
        </>
    )
}