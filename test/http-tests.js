'use strict';
const promise = require('bluebird');
const _ = require('lodash');
const supertest = require('supertest');
const chai = require('chai');
chai.should();
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const app = require('../app');

describe('HTTP Tests: ', () => {
    it('Can get lists and details from API', function (done) {
        //Go get all the lists
        supertest(app)
            .get('/lists')
            .set('Accept', 'application/json')
            .then((res) => {
                if(res.statusCode !== 200) throw new Error(res.text);
                const listNames = [];
                const obj = JSON.parse(res.text);
                expect(obj).to.be.an('object');
                for (const prop in obj) {
                    expect(obj[prop]).to.be.an('array');
                    listNames.push(prop);
                }
                //return listNames;
                const listCalls = _.map(listNames, name => {
                    supertest(app)
                        .get(`/lists/${name}`)
                        .set('Accept', 'application/json')
                        .end((err, res) => {
                            const obj = JSON.parse(res.text);
                            expect(obj).to.be.an('object');
                            expect(obj.name).to.equal(name);
                            expect(obj[name].list).to.be.an('array');
                        })
                });
                return promise.all(listCalls).then(() => {done()});
            })
            .catch(done);
    });
});