import {  totalElectroCons, grillMachine, whashingMachine, frige } from "./5.js";

describe("tests to check a properties of kitchen devices ", () => {

  it("check total consumption of switched on devices", () => expect(grillMachine.switchOn('on') 
  && frige.switchOn('on') && whashingMachine.switchOn('on')).toBe(2150));
  
  it("to chek a material of device housing", () => expect(grillMachine.material).toBe('Steel'));

  it("to check tt consumption is a number", () => expect(totalElectroCons).not.toBeNaN());

});

