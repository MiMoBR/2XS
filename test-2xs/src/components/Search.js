import React from 'react'
import { useForm } from 'react-hook-form'
import useState from 'react-hook-use-state'

const Search = ({ toSearch }) => {
    const { register, watch, handleSubmit     } = useForm()
    
    const [ namePlace, setNamePlace ] = useState('')
    const [ minTemp, setMinTemp ] = useState('') 
    const [ maxTemp, setMaxTemp ] = useState('') 
    const [ typeTemp, setTypeTemp ] = useState('metric') 
    const [ typeTempInfo, setTypeTempInfo ] = useState('°C') 
    
    const changeType = (e) => {
        console.log(e)
        setTypeTemp(e.target.value)
        setTypeTempInfo(e.target.selectedOptions[0].innerHTML)
    }
    
    const onSubmit = async (data) => {
        const dataLat = toSearch.lat
        const dataLong = toSearch.lng
        const typeMetric = typeTemp // Fahrenheit  = imperial || Celsius = metric
        console.log('typeMetric', typeMetric)

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataLat}&lon=${dataLong}&units=${typeMetric}&appid=0f8dab54752120a48be014ca3905bc5e`);
            const json = await res.json();
            console.log('json', json)

            setNamePlace(json.name)
            setMinTemp(json.main.temp_min)
            setMaxTemp(json.main.temp_max)
        } catch (err) {
            console.error('err', err);
        }
    }

    return(
        <section>
            <div>
                <div><h2>Choose the place you want to know the temperature</h2></div>
                {/* <pre style={{backgroundColor:`black`,width:`15rem`,height:`18rem`,left:`0`,color:`white`}}>
                    {JSON.stringify(watch(), null, 2)}
                </pre> */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <select onChange={changeType}>
                                <option value="metric" name="°C">°C</option>
                                <option value="imperial" name="°F">°F</option>
                            </select>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lat" id="lat"
                                placeholder="lat"
                                {...register("lat")} 
                                disabled
                            />
                            <input
                                type="text"
                                name="long" id="long"
                                placeholder="long"
                                {...register("long")} 
                                disabled
                            />
                        </div>
                        <div>
                            <button 
                                type="submit"
                            >
                                Click to find the temperature
                            </button>
                        </div>
                        <div>
                            <div>
                                <p>Results:</p>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        <b>Name of city </b>
                                        {namePlace}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <b>Minimum temperature { typeTempInfo } </b>
                                        {minTemp}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <b>Maximum temperature { typeTempInfo } </b>
                                        {maxTemp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Search