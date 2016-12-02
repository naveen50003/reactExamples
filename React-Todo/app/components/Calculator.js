import React from 'react'

const Calculator  = ({lists,onDigitClick,enteredValue,evalCount,clearClick})  => (
  <div>
    <h3>calculator</h3>
    <ul>
      <input id="chasaweriveli" type="text" size="10" value={enteredValue} readOnly="true"/>
      <input type="button" value="C" 
              onClick = {()=>clearClick()} className="btn btn-warning"/>
    </ul>
    <ul>
      <input type="button" value="7" 
              onClick = {()=>onDigitClick("7")} className="btn btn-info"/>
      <input type="button" value="8" 
              onClick = {()=>onDigitClick("8")} className="btn btn-info"/>
      <input type="button" value="9" 
              onClick = {()=>onDigitClick("9")} className="btn btn-info"/>
      <input type="button" value="+" 
              onClick = {()=>onDigitClick("+")} className="btn btn-success"/>
    </ul>
    <ul>
      <input type="button" value="4" 
              onClick = {()=>onDigitClick("4")} className="btn btn-info"/>
      <input type="button" value="5" 
              onClick = {()=>onDigitClick("5")} className="btn btn-info"/>
      <input type="button" value="6" 
              onClick = {()=>onDigitClick("6")} className="btn btn-info"/>
      <input type="button" value="-" 
              onClick = {()=>onDigitClick("-")} className="btn btn-success"/>
    </ul>
    <ul>
      <input type="button" value="1" 
              onClick = {()=>onDigitClick("1")} className="btn btn-info"/>
      <input type="button" value="2" 
              onClick = {()=>onDigitClick("2")} className="btn btn-info"/>
      <input type="button" value="3" 
              onClick = {()=>onDigitClick("3")} className="btn btn-info"/>
      <input type="button" value="*" 
              onClick = {()=>onDigitClick("*")} className="btn btn-success"/>
    </ul>
    <ul>
      <input type="button" value="0" 
              onClick = {()=>onDigitClick("0")} className="btn btn-info"/>
      <input type="button" value="Equals" 
              onClick = {()=>evalCount(enteredValue)} className="btn btn-danger"/>
      <input type="button" value="/" 
              onClick = {()=>onDigitClick("/")} className="btn btn-success"/>
    </ul>
    <ul>
      <li id="History">
        <h3 id="History">History:</h3>
        {lists.map(list =>
            <p>{list}</p>
          )}
      </li>
  </ul>
  </div>
)

export default Calculator
