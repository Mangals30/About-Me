const createHeader = (name, nameDiv) => {
  for (const arr of name) {
    const alpha = document.createElement('p')
    alpha.textContent = arr
    alpha.className = 'alpha'
    nameDiv.appendChild(alpha)
  }
}

const displayTitles = (titles, i, titlesDiv) => {

  setInterval(() => {
    titlesDiv.innerHTML = ''
    const titleName = document.createElement('h3')
    const fontIcon = document.createElement('i')
    fontIcon.innerHTML = '<i class="fas fa-fire"></i>'
    titleName.className = 'title-name'
    titleName.textContent = titles[i]
    titlesDiv.appendChild(fontIcon)
    titlesDiv.appendChild(titleName)
    i++;
    i %= titles.length;
  }, 2000);
}

const createBio = (bio, bioDiv) => {
  const para = document.createElement('p')
  para.textContent = bio
  bioDiv.appendChild(para)
}

const displayTechs = (techs, i, technology) => {
  setInterval(() => {
    technology.innerHTML = ''
    const techsName = document.createElement('h3')
    const para = document.createElement('p')
    para.textContent = 'The technologies I learnt are : '
    techsName.className = 'techs'
    techsName.style.color = hexaDecimalColor()
    techsName.textContent = techs[i]
    technology.appendChild(para)
    technology.appendChild(techsName)
    i++;
    i %= techs.length;
  }, 2000);
}