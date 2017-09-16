'use strict';
const chai = require('chai');
chai.should();
const assert = require('chai').assert;
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

const dataFactory = require('../data/dataFactory');

describe('Basic Tests: ', () => {
    it('Can get list from factory', done => {
        const list = dataFactory.getList();
        expect(list).to.be.an('object');
        console.log(JSON.stringify(list));
        done();
    });

    it('Can get items by list name', done => {
        const list = require('../data/listData');
        for (const prop in list) {
            const obj = dataFactory.getList(prop);
            expect(obj).to.be.an('object');
            expect(obj.list).to.be.an('array');
            expect(obj.name).to.equal(prop);
        }
        done();
    });
});