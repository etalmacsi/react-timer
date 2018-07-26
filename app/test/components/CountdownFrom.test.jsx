let expect =require('expect');
let React =require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let $ =require('jQuery');

let CountdownForm = require('CountdownForm');

describe('CountdownForm',()=>{
    it('should exist',()=> {
        expect(CountdownForm).toExist();
    });

    it ('should call onSetCountdown if valid seconds enteret',()=>{
        let spy =expect.createSpy();
        let countdownForm =TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el= $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it ('should not call onSetCountdown if valid seconds enteret',()=>{
        let spy =expect.createSpy();
        let countdownForm =TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el= $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='b';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
});