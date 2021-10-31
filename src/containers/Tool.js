import axios from 'axios';
import React, { useState } from 'react';

import ExperimentRow from '../components/ExperimentRow';
import { host } from '../settings';

let researchData = [];

const Tool = () => {
  const [carbonSource, setCarbonSource] = useState(null);
  const [basePressure, setBasePressure] = useState(null);
  const [bpIneq, setBpIneq] = useState(null);
  const [catalyst, setCatalyst] = useState(null);
  const [thickness, setThickness] = useState(null);
  const [thIneq, setThIneq] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [dmIneq, setDmIneq] = useState(null);
  const [length, setLength] = useState(null);
  const [lenIneq, setLengIneq] = useState(null);
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [saIneq, setSaIneq] = useState(null);
  const [tubeDiameter, setTubeDiameter] = useState(null);
  const [tdIneq, setTdIneq] = useState(null);
  const [crossSectionalArea, setCrossSectionalArea] = useState(null);
  const [csaIneq, setCsaIneq] = useState(null);
  const [tubeLength, setTubeLength] = useState(null);
  const [tlIneq, setTlIneq] = useState(null);
  const [lengthOfHeatedRegion, setLengthOfHeatedRegion] = useState(null);
  const [lhrIneq, setLhrIneq] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCarbonSourceChange = e => {
    e.target.value ? setCarbonSource(e.target.value) : setCarbonSource(null);
  }
  const handleBasePressureChange = e => {
    e.target.value ? setBasePressure(e.target.value) : setBasePressure(null);
  }
  const handleCatalystChange = e => {
    e.target.value ? setCatalyst(e.target.value) : setCatalyst(null);
  }
  const handleThicknessChange = e => {
    e.target.value ? setThickness(e.target.value) : setThickness(null);
  }
  const handleDiameterChange = e => {
    e.target.value ? setDiameter(e.target.value) : setDiameter(null);
  }
  const handleLengthChange = e => {
    e.target.value ? setLength(e.target.value) : setLength(null);
  }
  const handleSurfaceAreaChange = e => {
    e.target.value ? setSurfaceArea(e.target.value) : setSurfaceArea(null);
  }
  const handleTubeDiameterChange = e => {
    e.target.value ? setTubeDiameter(e.target.value) : setTubeDiameter(null);
  }
  const handleCrossSectionalAreaChange = e => {
    e.target.value ? setCrossSectionalArea(e.target.value) : setCrossSectionalArea(null);
  }
  const handleTubeLengthChange = e => {
    e.target.value ? setTubeLength(e.target.value) : setTubeLength(null);
  }
  const handleLengthOfHeatedRegionChange = e => {
    e.target.value ? setLengthOfHeatedRegion(e.target.value) : setLengthOfHeatedRegion(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let queryString = '?';
    if (carbonSource) {
      queryString += `rcs=${carbonSource}`;
    }
    if (basePressure) {
      queryString += `rbp=${bpIneq}${basePressure}`;
    }
    if (catalyst) {
      queryString += `sc=${catalyst}`
    }
    if (thickness) {
      queryString += `st=${thIneq}${thickness}`
    }
    if (diameter) {
      queryString += `sd=${dmIneq}${diameter}`
    }
    if (length) {
      queryString += `sl=${lenIneq}${length}`
    }
    if (surfaceArea) {
      queryString += `ssa=${saIneq}${surfaceArea}`
    }
    if (tubeDiameter) {
      queryString += `ftd=${tdIneq}${tubeDiameter}`
    }
    if (crossSectionalArea) {
      queryString += `fcsa=${csaIneq}${crossSectionalArea}`
    }
    if (tubeLength) {
      queryString += `ftl=${tlIneq}${tubeLength}`
    }
    if (lengthOfHeatedRegion) {
      queryString += `flhr=${lhrIneq}${lengthOfHeatedRegion}`
    }

    setLoading(false);
    const response = await axios.get(host + '/experiments/data' + queryString);
    const data = response.data;
    researchData = data;
    setLoading(true);
  }

  return (
    <div className="w-full flex">
      <form className="w-1/3 max-w-sm" onSubmit={e => handleSubmit(e)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="carbonsource">Carbon Source</label>
          </div>
          <div className="md:w-1/2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="carbonsource" type="text" onChange={e => handleCarbonSourceChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="basepressure">Base Pressure</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setBpIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="basepressure" type="number" step="0.01" onChange={e => handleBasePressureChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="catalyst">Catalyst</label>
          </div>
          <div className="md:w-1/2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="catalyst" type="text" onChange={e => handleCatalystChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="thickness">Thickness</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setThIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="thickness" type="number" step="0.01" onChange={e => handleThicknessChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="diameter">Diameter</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setDmIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="diameter" type="number" step="0.01" onChange={e => handleDiameterChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="length">Length</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setLengIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="length" type="number" step="0.01" onChange={e => handleLengthChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="surfacearea">Surface Area</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setSaIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="surfacearea" type="number" step="0.01" onChange={e => handleSurfaceAreaChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tubediameter">Tube Diameter</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setTdIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="tubediameter" type="number" step="0.01" onChange={e => handleTubeDiameterChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="crosssectionalarea">Cross Sectional Area</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setCsaIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="crosssectionalarea" type="number" step="0.01" onChange={e => handleCrossSectionalAreaChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tubelength">Tube Length</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setTlIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="tubelength" type="number" step="0.01" onChange={e => handleTubeLengthChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lohr">Length of Heated Region</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setLhrIneq(e.target.value)}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="lohr" type="number" step="0.01" onChange={e => handleLengthOfHeatedRegionChange(e)} />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="w-2/3">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Ambient Temperature</th>
              <th>Average Thickness of Growth</th>
              <th>Base Pressure</th>
              <th>Carbon Source</th>
              <th>Catalyst</th>
              <th>Cross Sectional Area</th>
              <th>Date</th>
              <th>Dew Point</th>
              <th>Diameter</th>
              <th>Domain Size</th>
              <th>Growth Coverage</th>
              <th>Length</th>
              <th>Length of Heated Region</th>
              <th>Material</th>
              <th>Number of Layers</th>
              <th>Shape</th>
              <th>Standard Deviation of Growth</th>
              <th>Surface Area</th>
              <th>Thickness</th>
              <th>Tube Diameter</th>
              <th>Tube Length</th>
            </tr>
          </thead>
          <tbody>
            {researchData.map((data, i) => {
              console.log(data)
              return <ExperimentRow
                key={i}
                ambientTemperature={data.amient_temperature}
                avgThicknessOfGrowth={data.averabe_thickness_of_growth}
                basePressure={data.base_pressure}
                carbonSource={data.carbon_source}
                catalyst={data.catalyst}
                crossSectionalArea={data.cross_sectional_area}
                date={data.date}
                dewPoint={data.dew_point}
                diameter={data.diameter}
                domainSize={data.domain_size}
                growthCoverage={data.growth_coverage}
                len={data.length}
                lenHeatedRegion={data.length_of_heated_region}
                material={data.material}
                numLayers={data.number_of_layers}
                shape={data.shape}
                stddevGrowth={data.standared_deviation_of_growth}
                surfaceArea={data.surface_area}
                thichness={data.thickness}
                tubeDiameter={data.tube_diamter}
                tubeLen={data.tube_length}
              />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tool;
