"use strict";
const chai = require('chai');
chai.should();
const assert = require('chai').assert;
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

const dataFactory = require('../data/dataFactory');

describe('Basic Tests: ', function () {
    it('Can get list from factory', function (done) {
        const factory = dataFactory.getList();
        expect(factory).to.be.an('object');
        done();
    });

    it('Can get items by list name', function (done) {
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