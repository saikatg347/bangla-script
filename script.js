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
	const response = await fetch('https://bangla-script-api.herokuapp.com/run', requestOptions)
	const output = await response.json()

	if (typeof output === 'string') {
		setOutput(output)
	} else {
		setOutput(
			'Some error occured!\nCurrently there is no error handling so please check your code again for any syntax errors!!\nRefer to the documentation for basic syntax!!'
		)
	}

	// fetch('https://bangla-script-api.herokuapp.com/run', requestOptions)
	// 	.then((response) => response.json())
	// 	.then((result) => setOutput(result))
	// 	.catch((error) => setOutput('error', JSON.stringify(error, undefined, 2)))
}

const reset = () => {
	inputArea.value = ''
	outputArea.value = ''
}

const setOutput = (output) => {
	outputArea.value = output
}
