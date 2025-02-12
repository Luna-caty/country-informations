async function guessCountry() {
    try {
    let value = document.getElementById("inputText").value;
    let cName = document.getElementById("countryName");
    let cCapital = document.getElementById("countryCapital");
    let cPopulation = document.getElementById("countryPopulation");
    let cLanguage = document.getElementById("countryLanguage");
    let image = document.getElementById("flag");
    let resultDiv =document.getElementById("result")
    const response = await fetch(`https://restcountries.com/v3.1/name/${value}`);
    // console.log(response)
    if (!response.ok) {
      throw new Error("Country not found ");
    }
    const data = await response.json();
    console.log(data);
    cName.innerHTML = `Name : ${data[0].name.official}`;
    cCapital.innerHTML =`Capital : ${data[0].capital}`
    cPopulation.innerHTML = ` Population :${data[0].population}`;
    let languages = Object.values(data[0].languages);
    cLanguage.innerHTML = ` Offcial Language :${languages}`;
    image.src=data[0].flags.png
    image.style.display="block"
    resultDiv.style.backgroundColor = "white"
    resultDiv.style.boxShadow = "8px 8px 8px rgba(56, 56, 56, 0.5)"
  } catch (error) {
    // errorText.innerHTML='Not found'
    
  }
}
guessCountry();



/*let language = (data[0].languages).map((ele) => {
    return ele;
});
the issue was that data[0].languages is an object and map works on arrays only 
 so to excract values we used Object.values
 Object.values () => counvert an object into an array
*/

