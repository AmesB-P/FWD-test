import React, {FC, useState} from "react";
import Card from "./card"
import {SubmitHandler, useForm} from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import {useAppDispatch} from "../hooks/reduxHooks";
import {resultFormAction} from "../redux/actions/resultForm";
import {useNavigate} from "react-router-dom";

const FormInput : FC = () => {

    enum GenderEnum {
        female = "FEMALE",
        male = "MALE",
    }

    interface FormInput {
        first_name: string
        last_name: string
        planCode: string
        paymentFrequency: string
        premiumPerYear: string
        saPerYear: string
        dob: Date
        gender: GenderEnum
    }

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const { register, handleSubmit } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = async (data) =>{
        try {
            console.log(data)
            const newData = {
                ...data,
                dob : selectedDate.startDate
            }

            const res = await axios.post(`https://api.fwd.co.th/dev-ecommerce/getProduct/` , newData)


            if(!res.data.code){
                dispatch(resultFormAction(res.data))
                navigate("/Result_form")
            }else {
                alert(`${res.data.message}`)
            }
        }catch (e) {
            console.log("e" ,e)
        }
    }

    const [selectedDate , setSelectedDate] = useState({startDate : null ,endDate : null})
    const onChangeDate = (value : any) =>{
        try {
            console.log(value)
            setSelectedDate(value)
        }catch (e) {

        }
    }

    return (
        <Card>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className='max-w-md mx-auto grid grid-cols-1 sm:grid-cols-6 gap-3'>
                    {/*<img alt={""} src='https://tailwindcomponents.com/svg/logo-color.svg' className='h-8 cols-span-full'/>*/}
                    <div className={`sm:col-span-3`}>
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                            ชื่อจริง
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="text"
                                {...register("first_name")}
                                id="first_name"
                                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="John"
                            />
                        </div>

                    </div>

                    <div className={`sm:col-span-3`}>
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                            นามสกุล
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            {/*<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
                            {/*    <span className="text-gray-500 sm:text-sm">$</span>*/}
                            {/*</div>*/}
                            <input
                                type="text"
                                {...register("last_name")}
                                id="last_name"
                                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="smith"
                            />
                        </div>

                    </div>

                    <div className={`sm:col-span-3`}>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            เพศ
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            {/*<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
                            {/*    <span className="text-gray-500 sm:text-sm">$</span>*/}
                            {/*</div>*/}
                            <select {...register("gender")} className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value={"MALE"}>Male</option>
                                <option value={"FEMALE"}>Female</option>
                            </select>
                        </div>

                    </div>

                    <div className={`sm:col-span-3`}>
                        <label htmlFor="planCode" className="block text-sm font-medium leading-6 text-gray-900">
                            <span className={'text-red-600'}>* </span> วัน/เดือน/ปีเกิด
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            {/*<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
                            {/*    <span className="text-gray-500 sm:text-sm">$</span>*/}
                            {/*</div>*/}

                            {/*<DatePicker*/}
                            {/*    // placeholder="yyyy-mm-dd"*/}
                            {/*    // name="dob"*/}
                            {/*    {...register("dob")}*/}
                            {/*    id="dob"*/}
                            {/*    className="block w-full rounded-md border-0 py-1 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                            {/*/>*/}
                            <Datepicker
                                value={selectedDate}
                                {...register("dob" )}
                                onChange={onChangeDate}
                                primaryColor={"teal"}
                                asSingle={true}
                                useRange={false}
                                inputClassName="w-full rounded-md border-0 py-1 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>

                    <div className={`col-span-full`}>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            แผนประกันภัย
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <select {...register("planCode")} name={"planCode"} className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value={"T11A20"}>package 1 (benefit 200k)</option>
                                <option value={"T11A50"}>package 2 (benefit 500k)</option>
                                <option value={"T11AM1"}>package 3 (benefit 1M)</option>
                            </select>
                        </div>

                    </div>

                    <div className={`col-span-full`}>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            งวดการชำระเบี้ย
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            {/*<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
                            {/*    <span className="text-gray-500 sm:text-sm">$</span>*/}
                            {/*</div>*/}
                            <select {...register("paymentFrequency")} name={"paymentFrequency"} className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value={"YEARLY"}>รายปี</option>
                                <option value={"HALFYEARLY"}>รายครึ่งปี</option>
                                <option value={"QUARTERLY"}>ราย 3 เดือน</option>
                                <option value={"MONTHLY"}>รายเดือน</option>
                            </select>
                        </div>

                    </div>

                    <div className={`col-span-full`}>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            เบี้ยประกัน
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="text"
                                {...register("premiumPerYear")}
                                name="premiumPerYear"
                                id="premiumPerYear"
                                placeholder={"0"}
                                className="block w-full rounded-md border-0 py-1 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>
                    <div className={`col-span-full`}>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            ทุนประกันภัย
                        </label>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="text"
                                {...register("saPerYear")}
                                name="saPerYear"
                                id="saPerYear"
                                placeholder={"0"}
                                className="block w-full rounded-md border-0 py-1 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>

                    <div className={"col-span-full flex justify-center"}>
                        <button className={"rounded-lg bg-teal-300 p-4 text-white"}>
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </Card>
    )
}

export default FormInput