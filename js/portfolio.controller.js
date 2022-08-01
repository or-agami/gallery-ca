console.log('Starting up');


// TODO: put listener in func
// $('.portfolio-link-test').click({ id: 'minesweeper' }, onRenderProjectModal)
$(initPortfolio)

function initPortfolio() {
    renderPortfolioProjects()
}

function renderPortfolioProjects() {

    const projects = getProjectsForDisplay()
    const portfolioGrid = document.querySelector('.portfolio-grid')

    const strHTMLs = projects.map(proj =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="onRenderProjectModal('${proj.id}')" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.category}</p>
          </div>
        </div>`
    )
    portfolioGrid.innerHTML = strHTMLs.join('')
}

function onRenderProjectModal(projId) {
    console.log('projId:', projId);
    const proj = getProjectForDisplay(projId)
    const projectModal = document.querySelector('.portfolio-modal .modal-body')
    
    const strHTML = 
        `<h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.title}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="">
        <p>${proj.desc}</p>
        <ul class="list-inline">
          <li>Date: ${proj.publishedAt}</li>
          <!-- <li>Client: Explore</li> -->
          <li>Category: ${proj.labels.join(', ')}</li>
          <li>
            <button class="btn btn-primary" onclick=" window.open('${proj.url}','_blank')" type="button">
              <i class="fa fa-github"></i>
              Source Code
            </button>
          </li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
            Close Project
        </button>`
    
    projectModal.innerHTML = strHTML
    
}