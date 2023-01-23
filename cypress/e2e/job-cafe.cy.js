///<reference types = "Cypress"/ >
describe('Job Cafe sanity spec',{defaultCommandTimeout: 20000}, () => {

  it('test job page with 10 sec', {defaultCommandTimeout: 10000}, () => {
    cy.visit('http://167.99.178.249:3000/job-page')
    //cy.wait(5000)
    cy.get('[class ="post-item clearfix"]').should("be.visible")
  })   
  it('test job page with 1 sec', {defaultCommandTimeout: 1000}, () => {
    cy.visit('http://167.99.178.249:3000/job-page')
    //cy.wait(5000)
    cy.get('[class ="post-item clearfix"]',{timeout:10000}).should("be.visible")

    
  })   

  it('test job page search for  QA position', {defaultCommandTimeout: 20000}, () => {
    cy.visit('http://167.99.178.249:3000/job-page')
   
   // cy.get('[placeholder="position"]').type('QA',{force: true})
   // cy.get('button').contains('search').click({force: true})
   cy.searchForPosition("QA")
    cy.get('[class ="post-item clearfix"]').contains ('QA').should ('be.visible')
  })  

  it('test job page search for developer position', {defaultCommandTimeout: 20000}, () => {
    cy.visit('http://167.99.178.249:3000/job-page')
   
   // cy.get('[placeholder="position"]').type('QA',{force: true})
   // cy.get('button').contains('search').click({force: true})
   cy.searchForPosition("Developer")
    cy.get('[class ="post-item clearfix"]').contains ('Developer').should ('be.visible')
  })  


})