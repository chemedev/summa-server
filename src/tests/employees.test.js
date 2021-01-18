const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const should = chai.should()
let db = require('../database/models')

chai.use(chaiHttp)

describe('Employees', function () {
  describe('GET /employees', function () {
    it('should return an object with keys error and data array', done => {
      chai
        .request(server)
        .get('/employees')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.an('object')
          res.body.error.should.be.eql(false)
          res.body.data.employees.should.be.an('array')
          res.body.data.employees.length.should.be.eql(5)
          done()
        })
    })
  })

  describe('GET /employees/1', function () {
    it('should return an object with keys error and data array', done => {
      chai
        .request(server)
        .get('/employees/1')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.an('array')
          res.body.error.should.be.equal(false)
          res.body.data[0].should.have.property('id')
          res.body.data[0].should.have.property('firstName')
          res.body.data[0].should.have.property('lastName')
          res.body.data[0].should.have.property('age')
          res.body.data[0].should.have.property('roleId')
          res.body.data[0].should.have.property('designerTypeId')
          res.body.data[0].should.have.property('programmingLanguageId')
          done()
        })
    })
  })

  describe('GET /employees/99', function () {
    it('should return an object with keys error and empty data array', done => {
      chai
        .request(server)
        .get('/employees/99')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.an('array')
          res.body.error.should.be.equal(false)
          should.equal(res.body.data[0], null)
          done()
        })
    })
  })

  this.afterAll(async function () {
    await db.sequelize.drop()
  })
})
