// todo kad se cekira ako je valid zeleni border ako je lose crveni
// todo onchange event
// todo message ispod inputa

const formValidation = (() => {
	const email = document.querySelector('#email');
	const country = document.querySelector('#country');
	const zipCode = document.querySelector('#zipCode');
	const password = document.querySelector('#password');
	const confirmPassword = document.querySelector('#confirmPassword');

	function _setIconAndInputValid(icon, inputDiv) {
		inputDiv.classList.remove('invalid');
		inputDiv.classList.add('valid');
		if (icon.classList.contains('fa-times-circle')) {
			icon.classList.remove('far', 'fa-times-circle');
		}
		icon.classList.add('far', 'fa-check-circle');
		icon.style.color = 'rgb(48, 182, 48)';
	}
	function _setIconAndInputInvalid(icon, inputDiv) {
		inputDiv.classList.remove('valid');
		inputDiv.classList.add('invalid');
		if (icon.classList.contains('fa-check-circle')) {
			icon.classList.remove('far', 'fa-check-circle');
		}
		icon.classList.add('far', 'fa-times-circle');
		icon.style.color = 'rgb(206, 18, 18)';
	}

	function checkEmail() {
		const icon = email.parentNode.querySelector('i');
		const emailDiv = email.parentNode;
		const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		//todo dodati if ako je prazan
		if (reg.test(String(email.value).toLowerCase())) {
			_setIconAndInputValid(icon, emailDiv);
		} else {
			_setIconAndInputInvalid(icon, emailDiv);
		}
	}
	function checkCountry() {
		const icon = country.parentNode.querySelector('i');
		const countryDiv = country.parentNode;
		const reg = /^([A-Za-z]{2}[ éàëA-Za-z]*)$/;
		console.log(country.value);
		//todo za prazan
		if (reg.test(String(country.value))) {
			_setIconAndInputValid(icon, countryDiv);
		} else {
			_setIconAndInputInvalid(icon, countryDiv);
		}
	}
	function checkZipCode() {
		const icon = zipCode.parentNode.querySelector('i');
		const zipDiv = zipCode.parentNode;
		const reg = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
		if (reg.test(String(zipCode.value))) {
			_setIconAndInputValid(icon, zipDiv);
		} else {
			_setIconAndInputInvalid(icon, zipDiv);
		}
	}
	function checkPassword() {
		const icon = password.parentNode.querySelector('i');
		const passwordDiv = password.parentNode;
		const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
		if (reg.test(String(password.value))) {
			_setIconAndInputValid(icon, passwordDiv);
		} else {
			_setIconAndInputInvalid(icon, passwordDiv);
		}
	}
	function checkConfirmedPassword() {
		const icon = confirmPassword.parentNode.querySelector('i');
		const confirmPasswordDiv = confirmPassword.parentNode;
		const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
		console.log(confirmPassword.value, password.value);
		//todo razdvojiti za nepavilno i nepoklapanje
		if (
			reg.test(String(confirmPassword.value)) &&
			confirmPassword.value === password.value
		) {
			_setIconAndInputValid(icon, confirmPasswordDiv);
		} else {
			_setIconAndInputInvalid(icon, confirmPasswordDiv);
		}
	}
	function checkForm(e) {
		e.preventDefault();
	}

	email.addEventListener('change', checkEmail);
	country.addEventListener('change', checkCountry);
	zipCode.addEventListener('change', checkZipCode);
	password.addEventListener('change', checkPassword);
	confirmPassword.addEventListener('change', checkConfirmedPassword);

	document.querySelector('#submitBtn').addEventListener('click', checkForm);
})();
