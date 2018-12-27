import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe("First Test", () => {
    it("should pass", () => {
       expect(true).to.equals(true);
    })
});

describe('Testing html', () => {
   it("Should say hello", (done) => {
      const index = fs.readFileSync('./src/index.html', 'utf-8')
      jsdom.env(index, function(error, window){
         const h1 = window.document.getElementsByTagName('h1')[0];
         expect(h1.innerHTML).to.equals("Hello Ekaa");
         done();
         window.close();
      });
   })
});
