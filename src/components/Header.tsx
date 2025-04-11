import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(() => pathname === '/' , [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <header className={ isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-linear-to-t from-sky-500 to-indigo-500'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink 
                            to="/"
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink 
                            to="/favoritos"
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>
                { isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-linear-to-bl from-yellow-500 to-fuchsia-500 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient" 
                                className="block text-white uppercase font-extrabold text-lg"
                            >
                                Nombre o Ingredientes
                            </label>
                            <input 
                                type="text" 
                                id="ingredient"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe"
                            />
                        </div>
                        <div className="space-y-4">
                            <label 
                                htmlFor="categoria"
                                className="block text-white uppercase font-extrabold text-lg"
                            >
                                Categoria
                            </label>
                            <select 
                                name="categoria" 
                                id="categoria"
                                className="p-3 w-full rounded-lg focus:outline-none bg-white cursor-pointer"
                            >
                                <option value="" className="bg-white">-- Seleccione --</option>

                            </select>
                        </div>

                        <input 
                            type="submit" 
                            value="Buscar Recetas"
                            className="cursor-pointer bg-yellow-400 hover:bg-orange-400
                            text-black font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
  )
}
