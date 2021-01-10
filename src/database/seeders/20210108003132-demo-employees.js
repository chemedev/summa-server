'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Employees',
      [
        {
          firstName: 'Juan',
          lastName: 'Chemello',
          age: 31,
          roleId: 2,
          programmingLanguageId: 3
        },
        {
          firstName: 'Gastón',
          lastName: 'López',
          age: 25,
          roleId: 1,
          designerTypeId: 1
        },
        {
          firstName: 'José',
          lastName: 'Rodríguez',
          age: 36,
          roleId: 2,
          programmingLanguageId: 2
        },
        {
          firstName: 'Dante',
          lastName: 'Moreno',
          age: 21,
          roleId: 1,
          designerTypeId: 2
        },
        {
          firstName: 'Martín',
          lastName: 'Campbell',
          age: 30,
          roleId: 2,
          programmingLanguageId: 2
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
