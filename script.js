const inputArea = document.getElementById('input-area')
const outputArea = document.getElementById('output-area')
const runBtn = document.getElementById('run-btn')
const resetBtn = document.getElementById('reset-btn')

$('#input-area').bangla({ enable: true })

const API_URL = 'https://bangla-script-api.herokuapp.com/run'

const handleSubmit = async () => {
	const code = inputArea.value
	var myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

	var urlencoded = new URLSearchParams()
	urlencoded.append('runInfo', 'local')
	urlencoded.append('code', code)

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow',
	}

	fetch('https://bangla-script-api.herokuapp.com/run', requestOptions)
		.then((response) => response.json())
		.then((result) => setOutput(result))
		.catch((error) => setOutput('error', error))
}

const reset = () => {
	inputArea.value = ''
	outputArea.value = ''
}

const setOutput = (output) => {
	outputArea.value = output
}
