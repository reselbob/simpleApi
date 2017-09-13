'use strict';
const promise = require('bluebird');
const _ = require('lodash');
const supertest = require('supertest');
const chai = require('chai');
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
                //inspect the response (res)
                if (res.statusCode !== 200) throw new Error(res.text);
                const listNames = [];
                const obj = JSON.parse(res.text);
                expect(obj).to.be.an('object');
                for (const prop in obj) {
                    expect(obj[prop]).to.be.an('array');
                    listNames.push(prop);
                }
                //return listNames;
                const listCalls = _.map(listNames, name => {
                //Make GET for each list name
                supertest(app)
                    .get(`/lists/${name}`)
                    .set('Accept', 'application/json')
                    .end((err, res) => {
                        //Make the expectations
                        const obj = JSON.parse(res.text);
                        expect(obj).to.be.an('object');
                        expect(obj.name).to.equal(name);
                        expect(obj[name].list).to.be.an('array');
                        expect(obj[name].list.length).to.be.gt(0);
                    })
                });
                //go up against all the endpoints
                return promise.all(listCalls).then(() => {
                    done()
                });
            })
            .catch(done);
    });
});