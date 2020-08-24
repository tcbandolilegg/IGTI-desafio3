import React from 'react';
import Plots from './components/Plots';
import Plot from './components/Plot';


function plotsCalc(valueCalc, valuePercent, numberOfMonths) {
  //  monta o array plostsCalt
  let arrayPlots = [];
  let arrayPlot = [];
  let plotNumber = 0;
  let accumValue = Number(valueCalc);
  let accumPerc = 0;
  let plot = valueCalc;
  let valuePlot = 0;
  let accumPlot = 0;

  for (let totPlots = 0; totPlots <= numberOfMonths; totPlots++) {
    plotNumber++;
    valuePlot = plot * (valuePercent / 100);
    accumPlot = accumPlot + valuePlot;
    accumValue = accumValue + valuePlot;
    if (valueCalc === 0) {
      accumPerc = 0;
    } else {
      accumPerc = ((accumValue * 100) / valueCalc) - 100;
    }
    plot = plot + valuePlot;
    arrayPlot = { month: plotNumber, accumValue: accumValue, accumPerc: accumPerc, accumPlot: accumPlot };
    console.log("Parcela", plotNumber);
    console.log(arrayPlot);
    arrayPlots.push(arrayPlot);
    console.log("Todas parcelas", plotNumber);
    console.log(arrayPlots);
  }
  return arrayPlots;
}

export default function App() {
  const [valuePercent, setValuePercent] = React.useState([]);
  const [numberOfMonths, setNumberOfMonths] = React.useState([]);
  //const [numberOfMonths] = React.useState([]);
  const [plotsToShow, setPlotsToShow] = React.useState([]);
  const [valueCalc, setValueCalc] = React.useState(0);
  // const handleNumberOfMonths = React.useState(0);



  React.useEffect(() => {

    const plotsToShow = plotsCalc(valueCalc, valuePercent, numberOfMonths);
    setPlotsToShow(plotsToShow);

  }, [valueCalc, valuePercent, numberOfMonths]);

  return (
    <div className='container'>
      <h1 className='center'>Juros e Depreciação</h1>

      <div className='inputs'>
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
      </div>

      <div>
        <Plots>

          {plotsToShow.map((id, month, accumValue, accumPerc, accumPlot) => {

            return <Plot key={`${id}_${month}_${accumValue}_${accumPerc}_${accumPlot}`}> {month}, {accumValue}, {accumPerc}, {accumPlot}</Plot>;
          })}

        </Plots>
      </div>
    </div >
  );
}
