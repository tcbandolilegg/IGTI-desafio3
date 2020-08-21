import React, { Component } from 'react';
import Plots from './components/Plots';
import Plot from './components/Plot';


export default function App() {
  const [valuePercent, setValuePercent] = React.useState([]);
  const [numberOfMonths, setNumberOfMonths] = React.useState([]);
  const [plotsToShow, setPlotsToShow] = React.useState([]);
  const [valueCalc, setValueCalc] = React.useState(0);



  React.useEffect(() => {

    // function plotsCalc() {
    //   ////  monta o array plostsCalt
    //   let arrayTemp = [];
    //   for (let index = 0; index <= numberOfMonths; index++) {

    //   }
    //   return ([]
    //   );
    // }

    // const plotsToShow = plotsCalc();
    // setPlotsToShow(plotsToShow);
  });
  // }, [valueCalc, allNames, options]);


  return (
    <div className='container'>
      <h1 className='center'>Juros e Depreciação</h1>

      <div>
        <div className='input-field'>
          <input
            id='inputValueCalc'
            type='number'
            value={valueCalc}
            onChange={({ target }) => setValueCalc(Number(target.value))}
          />
          <label htmlFor='inputValueCalc' className='active'>
            Valor para calculo:
          </label>
        </div>
        {/* *************************************************************** */}

        <div className='input-field'>
          <input
            id='inputPercent'
            type='number'
            value={valuePercent}
            onChange={({ target }) => setValuePercent(Number(target.value))}
          />
          <label htmlFor='inputPercent' className='active'>
            Percentual de cálculo ( positivo = JUROS ; negativo = DEPRECIAÇÃO):
          </label>
        </div>
        {/* *************************************************************** */}

        <div className='input-field'>
          <input
            id='numberOfMonths'
            type='number'
            value={numberOfMonths}
            min={-12}
            max={12}

            onChange={({ target }) => setNumberOfMonths(Number(target.value))}
          />
          <label htmlFor='numberOfMonths' className='active'>
            Período (Número de meses)
          </label>
        </div>

        <Plots>
          {plotsToShow.map((name, index) => {
            return <Plot key={`${name}_${index}`}>{name}</Plot>;
          })}
        </Plots>
      </div>
    </div>
  );
}
