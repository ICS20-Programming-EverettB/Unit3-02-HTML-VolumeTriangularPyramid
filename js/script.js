// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume .
 */
function calculate () {
  // input
  let ValueA = parseFloat(document.getElementById('value-a').value);
  let ValueB = parseFloat(document.getElementById('value-b').value);
  let ValueH = parseFloat(document.getElementById('value-h').value);
  
  // process
  let Volume = (1/6) * ValueA * ValueB * ValueH
  
  // output
  document.getElementById('volume-calculate').innerHTML = 'The volume is: ' + Volume.toFixed(2) + " cm3"
  

}
