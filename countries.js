var fourLetterCountries =[
'Chad',
'Cuba',
'Greenland',
'Iraq',
'Mali',
'Oman',
'India'
]

fourLetterCountries.push("Fiji")
fourLetterCountries.splice(4,0, "Iran")
//fourLetterCountries.splice(9,1)
//fourLetterCountries.splice(7,1)
fourLetterCountries.reverse()
fourLetterCountries[5]="Togo" 
fourLetterCountries.push("Laos")
fourLetterCountries.reverse()
fourLetterCountries. unshift("Peru")
console.log(fourLetterCountries)