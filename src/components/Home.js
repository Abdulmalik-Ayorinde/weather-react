import React from "react"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Nav} from './Nav'
import moment from "moment"



const api = {
  key: process.env.REACT_APP_API_KEY,
  base: process.env.REACT_APP_BASE_URL,
};

export function Home() {

    const [value, setValue] = useState("")
    const [result, setResult] = useState([])
    const [locale, setLocale] = useState(false)
    const [message, setMessage] = useState("")
    const [showData, setShowData] = useState(false)

    // useEffect(() => {
    //     return () => {
    //         console.log(value)
    //     }
    // }, [value])

    async function handleSubmit(e) {
        e.preventDefault()
        const input_value = e.target['value'].value
        setValue(input_value)

        try {
            const data = await fetch(`${api.base}${value}&appid=${api.key}`)
            const response = await data.json()
            setResult(response)
            setLocale(true) 
            setMessage(`${response?.sys?.country}`)
            setShowData(true)
        } catch (err) {
                if(err.response && value === "") {
                    
                    setMessage(err?.response?.data?.message)
                    console.log(err?.response?.data?.message)
                    setShowData(false)
                    setLocale(false) 
                } else {
                    setMessage( "Issues occured. check your internet")
                    setShowData(false)
                    setLocale(false) 
                }
        }


    }

    const theDate = moment().format('dddd[,] MMMM Do YYYY')
    // let day = theDate.getUTCDay()
    // let year = theDate.getFullYear()
    // let month = theDate.getMonth()
    // theDate.getMonth()
    
    return(
        <>
        <Nav/>
        <div className="text-center py-20">
            <h2 className="text-white pb-3 text-xl md:text-2xl">Input City</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="value" 
                value={value}
                onChange={e => setValue(e.target.value)}
                className="bg-newblue rounded-xl p-3 mr-2"
                />
                <input className="bg-newblue rounded-xl p-3" type="submit" />
            </form>
            <h1>{message}</h1>
        </div>
        
    {setShowData === false || locale ?
    <section> 
    <div>
        <h1 className="text-white text-center pb-3 text-xl md:text-2xl">
            Search Result for <span className="text-gray-900 text-opacity-100">{result.name},{result?.sys?.country}</span>
        </h1>
    </div>
        <div className="bg-newblue rounded-md mx-2 md:mx-auto md:max-w-xl my-2">
           <p className="text-white text-center text-xl bg-newblue-dark rounded-t-md">
            {theDate}
           </p>
           <div className="flex align-center text-xl justify-between p-3">
                <div >
                    <div className="md:flex">
                        <img 
                            alt={result.weather[0].main} 
                            src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
                            className="w-16 md:w-20"  
                        /> 
                        <span className="self-center">{result.weather[0].main}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center h-36 md:h-20">
                            <h3>
                                {result.weather[0].description.toUpperCase()}
                            </h3>
                            <button 
                            className="p-2 text-white rounded-2xl bg-newblue-dark self-start">
                                <Link to={{
                                    pathname: `${result.name}`,
                                    state: {result}
                                  }}
                                >
                                    Geo Data
                                </Link>
                            </button>
                    </div>
                </div>
                <div className="text-lg md:text-xl pt-3 text-newblue-dark">
                    <p className="md:p-2 p-1.5">Main Temp. - {result.main.temp}°C</p>
                    <p className="md:p-2 p-1.5">Wind Speed - {result.wind.speed}m/s</p>
                    <p className="md:p-2 p-1.5">Main pressure. - {result.main.pressure}°C</p>
                    <p className="md:p-2 p-1.5">Main Temp. - {result.main.temp}°C</p>
                </div>
           </div>
           
        </div>
         
    </section>
        : null}
   
         
        </>
    )

}

