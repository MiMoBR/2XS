import React from 'react'
import { useForm } from 'react-hook-form'
import useState from 'react-hook-use-state'
import '../components/styles/search.css'
import PopUpLoading from '../services/popupLoading'
import PopUpErro from '../services/popupError'

const Search = ({ toSearch }) => {
    const { register, watch, handleSubmit } = useForm({mode:"all"})
    
    const [ namePlace, setNamePlace ] = useState('')
    const [ minTemp, setMinTemp ] = useState('') 
    const [ maxTemp, setMaxTemp ] = useState('') 
    const [ typeTemp, setTypeTemp ] = useState('metric') 
    const [ typeTempInfo, setTypeTempInfo ] = useState('°C') 
    
    const changeType = (e) => {
        setTypeTemp(e.target.value)
        setTypeTempInfo(e.target.selectedOptions[0].innerHTML)
    }
    
    const onSubmit = async (data) => {
        const dataLat = toSearch.lat
        const dataLong = toSearch.lng
        const typeMetric = typeTemp // Fahrenheit  = imperial || Celsius = metric

        
        try {
            modalLoading()
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataLat}&lon=${dataLong}&units=${typeMetric}&appid=0f8dab54752120a48be014ca3905bc5e`)
            const json = await res.json()
            console.log('json', json)
            modalLoading()
            setNamePlace(json.name)
            setMinTemp(json.main.temp_min)
            setMaxTemp(json.main.temp_max)
        } catch (error) {
            modalLoading()
            console.error('error        ', error)
            popupErro()
        }
    }

    const [ showmodalLoading, setShowmodalLoading ] = useState(false)
    const modalLoading = () => {
        setShowmodalLoading(state => ! state)
    }

    const [ closePopupErro, setclosePopupErro ] = useState(false)
    const popupErro = () => {
        setclosePopupErro(state => ! state)
    }

    return(
        <section className="search">      
            { showmodalLoading && 
                <PopUpLoading
                    onClose={ () => modalLoading}
                />
            }
            { closePopupErro && 
                <PopUpErro
                    onClose={ () => popupErro }
                />
            }
            <div className="search__place">
                <div className="search__title">
                    <h2>2º After choosing the location, choose the type of temperature and click the search temperature button.</h2>
                </div>
                {/* <pre style={{backgroundColor:`black`,width:`15rem`,height:`18rem`,left:`0`,color:`white`}}>
                    {JSON.stringify(watch(), null, 2)}
                </pre> */}
                <div className="search__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="search_run dflex dflex-aligncenter">
                            <div className="search__inputs">
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
                            <div className="search__select">
                                <select onChange={changeType}>
                                    <option value="metric" name="°C">°C</option>
                                    <option value="imperial" name="°F">°F</option>
                                </select>
                            </div>
                            <div className="search__btn">
                                <button 
                                    type="submit"
                                    className="btnSearch"
                                >
                                    Search Temperature
                                </button>
                            </div>
                        </div>
                        <hr/>
                        <div className="search__results">
                            <div className="search__title">
                                <h2>3º After click the results will appear here</h2>
                            </div>
                            <div>
                                <div className="dflex dflex-aligncenter">
                                    <p>
                                        Place 
                                    </p>
                                    <h5 className="ml-2">
                                        {namePlace}
                                    </h5>
                                </div>
                                <div className="dflex dflex-aligncenter">
                                    <p>
                                        Minimum temperature { typeTempInfo } 
                                    </p>
                                    <h5 className="ml-2">{minTemp}</h5>
                                </div>
                                <div className="dflex dflex-aligncenter">
                                    <p>
                                        Maximum temperature { typeTempInfo } 
                                    </p>
                                    <h5 className="ml-2">{maxTemp}</h5>
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