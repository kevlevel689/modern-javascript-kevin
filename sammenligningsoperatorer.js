// oppgave 1 - hva blir utskriften
 
// a)
console.log(1 === 1); // utskriften blir true, fordi det er samme datatype og verdi.

// b)
console.log(1 === 2); // utskriften blir false, fordi det er samme datatype, men ikke samme verdi.

// c)
console.log(3==3); // utskriften blir true, fordi den sjekker om det er samme verdi, som det er.

// d)
console.log(2==3); // utskriften blir false, fordi det ikke er samme verdi.


// oppgave 2 - hva blir utskriften

// a)
console.log(1 == '1'); // utskriften blir true, fordi den ser bare på verdien, som er lik.

// b)
console.log(2 === '2'); // utskriften blir false, fordi den ser at datatypen er ikke lik.

// c)
/*"Forklar forskjellen på en sammenligning som bruker tre likhetstegn, 
og en sammenligning som bruker to likhetstegn (i javascript)"*/

// Her er en sammenligning:
console.log(1 === '1'); /* Her ser vi at det blir false, fordi den sjekker verdi og datatype,
og hvis en av dem er feil, (som er datatypen i denne tilfellen), så blir det false.

console.log(1 == '1'); /* Her ser vi at det blir true, imotsetning til tre likhetstegn,
to sier bare om noe er true eller false hvis det er lik verdi på begge sider.*/

// oppgave 3 - hva blir utskriften

// a)
console.log(1==1 && 2==2); // utskriften blir true, fordi begge er samme verdi.

// b) 
console.log(1==='1' && 2===2); /* utskriften blir false, fordi en av sidene har ikke samme datatype
og er dermed false. */

// c) 
console.log(1===1 && '2'===2); /* utskriften blir false, fordi en av sidene har ikke samme datatype
og er dermed false. */

// d) 
console.log(1=='1' && 2=='2'); /* utskriften blir true, fordi begge er samme verdi, 
for den sjekker bare verdien. */

// oppgave 4 - hva blir utskriften.

// a)
console.log(1==='1' || 2===2); // utskriften blir true, fordi begge er sanne.

// b)
console.log(2=='2' || 1==='1'); /* utskriften blir true, fordi den første siden har 
samme verdi på hver side, så den blir true. */

// c)
console.log(2===2 || 1===1 || 3==='3'); /* utrskriften blir true, fordi de første
to utregningene er sanne. */

// oppgave 5 - hva blir utskriften

// a) 
console.log(1 !== 1) /* utskriften blir false, fordi 1 er lik 1, og når man skriver 
utropstegn, så sier du at det ikke skal være det samme på den andre, som det var. */

// b) 
console.log(2 !== 1) /* utskriften er true, fordi 2 er ikke 1, og vi sier at 2 ER ikke 1, 
som er sant */

// c) 
console.log(2 !== 1 && 1 === 1) /* utskriften er true, fordi første side sier at 2 er ikke 1
som er true, og andre side som sier at 1 er samme datatype som 1, som er også true. */

// d) 
console.log(2 !== '2' && 1 === '1' || 2=='2' ) /* utskriften er true, fordi uansett om
de to første er false, så er det piper imellom, som sier at bare en side må være true.
den siste siden er true, og dermed er utskriften også true. */
