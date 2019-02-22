var URL = 'fake-api.js';

function callAsync() {
	console.log('callAsync:start');
	$.ajax({
		url: URL,
		async: true
	}).done(function () {
		console.log('callAsync:done');
	}).fail(function () {
		console.log('callAsync:fail');
	})
	console.log('callAsync:end');
}

function callSync() {
	console.log('callSync:start');
	$.ajax({
		url: URL,
		async: false
	}).done(function () {
		console.log('callSync:done');
	}).fail(function () {
		console.log('callSync:fail');
	})
	console.log('callSync:end');
}

function execute() {
	console.log('execute:start');
	callAsync();
	callSync();
	console.log('execute:end');
}

execute();