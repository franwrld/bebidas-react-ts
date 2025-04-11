import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Imagen de ${drink.strDrink}`}
                    className="hover:scale-125 transition-transform hover:rotate-2"
                />
            </div>

            <div className="p-5">
                <h2 className="text-2xl truncate font-black text-white">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer mt-5 w-full p-3 font-bold text-black text-lg rounded-lg"
                    onClick={() => selectRecipe(drink.idDrink)}
                >Ver Receta</button>
            </div>
        </div>
    )
}
