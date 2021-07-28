import {useState} from 'react';
import { IoOpen } from 'react-icons/io5';


function PlanetPage(props) {
    const [content, setContent] = useState("overview");
    const { planet } = props;

    const toggleContent = (data) => {
        setContent(data);
    }

    return (
        <>
        <div className="mobile-tabs">
                <div onClick={()=>toggleContent('overview')} style={content === 'overview' ? {opacity: 1, borderBottom: `4px solid ${planet.color}`} : null} className="mobile-tab">Overview</div>
                <div onClick={()=>toggleContent('structure')} style={content === 'structure' ? {opacity: 1, borderBottom: `4px solid ${planet.color}`} : null} className="mobile-tab">Structure</div>
                <div onClick={()=>toggleContent('geology')} style={content === 'geology' ? {opacity: 1, borderBottom: `4px solid ${planet.color}`} : null} className="mobile-tab">Geology</div>
            </div>
        <div className="planets-info__wrapper">
            <div className="planet-main-info">
                <div className="planet-img">
                    {content === 'overview' ?
                    <img className="planet-main-img" src={planet.images.planet} alt={`${planet.name} main`}/> :
                    content === 'structure' ?
                    <img className="planet-main-img" src={planet.images.internal} alt={`${planet.name} internal`}/> :
                    content === 'geology' ?
                    <>
                    <img className="planet-main-img" src={planet.images.planet} alt={`${planet.name} main`}/>
                    <img className="geology-img" src={planet.images.geology} alt={`${planet.name} geology`}/>
                    </> :
                    null }
                </div>
                <div className="planet-info">
                    <div className="planet-info__wrapper">
                        <h1>{planet.name}</h1>
                        {content === 'overview' ? 
                        <div>
                        <p className="planet-text">{planet.overview.content}</p>
                        <p className="planet-link">Source: <a target="_blank" rel="noreferrer" href={planet.overview.source}>Wikipedia</a><IoOpen className="link-icon"/></p>
                        </div> :
                        content === 'structure' ?
                        <div>
                        <p className="planet-text">{planet.structure.content}</p>
                        <p className="planet-link">Source: <a target="_blank" rel="noreferrer" href={planet.structure.source}>Wikipedia</a><IoOpen className="link-icon"/></p> 
                        </div> :
                        content === 'geology' ?
                        <div>
                        <p className="planet-text">{planet.geology.content}</p>
                        <p className="planet-link">Source: <a target="_blank" rel="noreferrer" href={planet.geology.source}>Wikipedia</a><IoOpen className="link-icon"/></p> 
                        </div> :
                        null }
                    </div>
                    <div className="content-selector__wrapper">
                        <div 
                            className="content-selector" 
                            style={content === 'overview' ? 
                                {backgroundColor: `${planet.color}`, border: 'none'} : null}
                            onClick={() => toggleContent('overview')}
                        >
                            <p className>01</p>
                            <p>Overview</p>
                        </div>
                        <div 
                            className="content-selector" 
                            style={content === 'structure' ? 
                                {backgroundColor: `${planet.color}`, border: 'none'} : null}
                            onClick={() => toggleContent('structure')}
                        >
                            <p>02</p>
                            <p>Internal Structure</p>
                        </div>
                        <div 
                            className="content-selector" 
                            style={content === 'geology' ? 
                                {backgroundColor: `${planet.color}`, border: 'none'} : null}
                            onClick={() => toggleContent('geology')}
                        >
                            <p>03</p>
                            <p>Surface Geology</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra-data__wrapper">
                <div className="extra-data">
                    <p>Rotation Time</p>
                    <p>{planet.rotation}</p>
                </div>
                <div className="extra-data">
                    <p>Revolution Time</p>
                    <p>{planet.revolution}</p>
                </div>
                <div className="extra-data">
                    <p>Radius</p>
                    <p>{planet.radius}</p>
                </div>
                <div className="extra-data">
                    <p>Average Temp</p>
                    <p>{planet.temperature}</p>
                </div>
            </div>
            <div className="spacer"/>
        </div>
        </>
    )
}

export default PlanetPage;