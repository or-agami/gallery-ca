
$(initPortfolio)

function initPortfolio() {
    renderPortfolioProjects()
    $('.btn-submit-form').click(onSubmitContactMe)
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
    const proj = getProjectById(projId)
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
            <button class="btn btn-primary" onclick="window.open('${proj.url}','_blank')" type="button">
              <i class="fa fa-github"></i>
              Source Code
            </button>
          </li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
            Close
        </button>`

    projectModal.innerHTML = strHTML
}

function onSubmitContactMe(ev) {

    ev.preventDefault()

    const mailAddr = $('#mailInputForm').val()
    const subject = $('#subjectInputForm').val()
    const mailBody = $('#textInputForm').val()
    console.log('mailBody:', mailBody);
    const strMail =
    `https://mail.google.com/mail/?view=cm&fs=1&to=oragami0@gmail.com&su=${subject}&body=From: ${mailAddr}
        Massage: ${mailBody}`

    window.open(`${strMail}`, '_blank')
}