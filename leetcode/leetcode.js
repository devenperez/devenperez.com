async function loadProblems() {

    const requestURL = 'https://api-git.devenperez.com/data/sample.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const solutions = await response.json();

    console.log(solutions)
}