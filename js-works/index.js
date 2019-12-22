/////////////////How Code is Executed/////////////////////////

// Host (browser) where JS is hosted has some sort of JS engine that takes my code and excutes it. So a JS engine is a program that excutes JS code. 

// Code is parsered by a parser ---> reads code line by line and sees if syntax is correct ----> if everything is correct then the parser produces a Abstract syntax tree ----> tree is translated into machine code ----> turns js code into code that can be excuted directly by a cpu proccessor ----> then code finally runs 
 


//////////Execution Context and the Execution Stack///////////

// all JS codes need an enviroment to run in, and these enviroments are called execution context 

// lastName === window.lastName, because lastName is a property of the window object