document
	.getElementById('selectionForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		let selectedOptions = [];
		const checkboxes = document.querySelectorAll(
			'input[type="checkbox"]:checked'
		);

		checkboxes.forEach((checkbox) => {
			selectedOptions.push(checkbox.name);
		});

		document.getElementById('result').innerHTML =
			selectedOptions.length > 0
				? `You selected: ${selectedOptions.join(', ')}`
				: 'No options selected.';
	});
