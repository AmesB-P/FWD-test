import React, {FC} from "react";
import Card from "./card"
import {useAppSelector} from "../hooks/reduxHooks";
import {Link} from "react-router-dom";
const ResultForm : FC = () => {

    const benefitData = useAppSelector(({benefit}) => benefit)
    const {benefitTable} = benefitData

    return (
            <Card customClassName={"w-full h-full px-10 py-8 bg-gray-100 rounded-lg shadow-xl"}>
                <div className={"text-lg "}> Benefit Table</div>
                <div className=' mx-auto grid grid-cols-1 gap-3'>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {
                                    benefitTable && (
                                        Object.keys(benefitTable[1]).map(j => <th scope="col" className="px-6 py-3">
                                            {j}
                                        </th>
                                        )
                                    )
                                }
                            </tr>
                            </thead>
                            <tbody>
                            {

                                benefitTable && benefitTable.map((e : any) =>{
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            {
                                                Object.keys(e).map(j => <th className={"px-6 py-4"}>{e[j]}</th>)
                                            }
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>
                    </div>

                    <div className={"col-span-full flex justify-center"}>
                        <Link to={"/Home"} className={"rounded-lg bg-teal-300 p-4 text-white"}>
                            Back
                        </Link>
                    </div>


                </div>
            </Card>
    )
}

export default ResultForm