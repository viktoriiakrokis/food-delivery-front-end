describe('Search bar', function () {
    it('should search by restaurant name', function () {
        cy.visit('http://localhost:3000/')
        cy.get('#searchbar').type('burger')
        cy.get('.cart').first().contains('Social Burgerjoint Citycenter')
        cy.get('.cart').should('have.length', 2)
        cy.contains('Found 2 restaurants')
    })
})

describe('Sort function', function () {
    it('should sort elements by restaurant name ascending', function () {
        cy.visit('http://localhost:3000/')
        cy.get('#sortbar').select('NameAsc')
        cy.get('.cart').first().contains('Arnolds Forum')
        cy.get('.cart').last().contains('Zhonghua')
    })

    it('should sort elements by restaurant name descending', function () {
        cy.visit('http://localhost:3000/')
        cy.get('#sortbar').select('NameDesc')
        cy.get('.cart').first().contains('Zhonghua')
        cy.get('.cart').last().contains('Arnolds Forum')
    })

    it('should sort elements by default', function () {
        cy.visit('http://localhost:3000/')
        cy.get('#sortbar').select('None')
        cy.get('.cart').first().contains('Social Burgerjoint Citycenter')
        cy.get('.cart').last().contains('Burger King Mannerheimintie')
    })
})

// Arrange - setup initial app state
        // -visit a web page
        // -query for an element
        // Act - take an action
        // -interact with that element
        // Assert - make an assertion
        // -make an assertion about page content
