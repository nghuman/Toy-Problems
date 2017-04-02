// Description:
//
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){

  let urlParts = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/);

  let domain = urlParts[0];

  let answer = domain.split('.')[0];

  return answer;
}
